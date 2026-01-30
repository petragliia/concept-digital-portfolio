-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Table: profiles (Extends auth.users)
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  role text check (role in ('agent', 'admin')) default 'agent',
  avatar_url text,
  updated_at timestamp with time zone
);

-- Table: properties
create table properties (
  id uuid default uuid_generate_v4() primary key,
  agent_id uuid references profiles(id) on delete cascade not null,
  title text not null,
  description text,
  price numeric not null,
  type text check (type in ('sale', 'rent')) not null,
  category text check (category in ('house', 'apartment', 'commercial', 'land')) not null,
  bedrooms int default 0,
  bathrooms int default 0,
  area_sqm numeric not null,
  city text not null,
  neighborhood text,
  latitude float,
  longitude float,
  status text check (status in ('active', 'sold', 'pending')) default 'active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: property_images
create table property_images (
  id uuid default uuid_generate_v4() primary key,
  property_id uuid references properties(id) on delete cascade not null,
  url text not null,
  display_order int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: amenities
create table amenities (
  id serial primary key,
  name text not null unique
);

-- Table: property_amenities (Junction)
create table property_amenities (
  property_id uuid references properties(id) on delete cascade not null,
  amenity_id int references amenities(id) on delete cascade not null,
  primary key (property_id, amenity_id)
);

-- Enable RLS
alter table profiles enable row level security;
alter table properties enable row level security;
alter table property_images enable row level security;

-- Policies
-- Public Read Access
create policy "Public properties are viewable by everyone"
  on properties for select
  using ( true );

create policy "Public images are viewable by everyone"
  on property_images for select
  using ( true );

-- Agent Write Access (simplified for MVP, ideally check agent_id)
create policy "Agents can insert properties"
  on properties for insert
  with check ( auth.uid() = agent_id );

create policy "Agents can update their own properties"
  on properties for update
  using ( auth.uid() = agent_id );

create policy "Users can see their own profile"
  on profiles for select
  using ( auth.uid() = id );
