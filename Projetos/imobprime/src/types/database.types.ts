export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    full_name: string | null
                    role: 'agent' | 'admin'
                    avatar_url: string | null
                    updated_at: string | null
                }
                Insert: {
                    id: string
                    full_name?: string | null
                    role?: 'agent' | 'admin'
                    avatar_url?: string | null
                    updated_at?: string | null
                }
                Update: {
                    id?: string
                    full_name?: string | null
                    role?: 'agent' | 'admin'
                    avatar_url?: string | null
                    updated_at?: string | null
                }
            }
            properties: {
                Row: {
                    id: string
                    agent_id: string
                    title: string
                    description: string | null
                    price: number
                    type: 'sale' | 'rent'
                    category: 'house' | 'apartment' | 'commercial' | 'land'
                    bedrooms: number | null
                    bathrooms: number | null
                    area_sqm: number
                    city: string
                    neighborhood: string | null
                    latitude: number | null
                    longitude: number | null
                    status: 'active' | 'sold' | 'pending'
                    created_at: string
                }
                Insert: {
                    id?: string
                    agent_id: string
                    title: string
                    description?: string | null
                    price: number
                    type: 'sale' | 'rent'
                    category: 'house' | 'apartment' | 'commercial' | 'land'
                    bedrooms?: number | null
                    bathrooms?: number | null
                    area_sqm: number
                    city: string
                    neighborhood?: string | null
                    latitude?: number | null
                    longitude?: number | null
                    status?: 'active' | 'sold' | 'pending'
                    created_at?: string
                }
                Update: {
                    id?: string
                    agent_id?: string
                    title?: string
                    description?: string | null
                    price?: number
                    type?: 'sale' | 'rent'
                    category?: 'house' | 'apartment' | 'commercial' | 'land'
                    bedrooms?: number | null
                    bathrooms?: number | null
                    area_sqm?: number
                    city?: string
                    neighborhood?: string | null
                    latitude?: number | null
                    longitude?: number | null
                    status?: 'active' | 'sold' | 'pending'
                    created_at?: string
                }
            }
            property_images: {
                Row: {
                    id: string
                    property_id: string
                    url: string
                    display_order: number | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    property_id: string
                    url: string
                    display_order?: number | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    property_id?: string
                    url?: string
                    display_order?: number | null
                    created_at?: string
                }
            }
        }
    }
}
