-- Rode este script na aba "SQL Editor" do Supabase

CREATE TABLE IF NOT EXISTS page_views (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    path TEXT NOT NULL,
    device TEXT,
    time_spent INTEGER DEFAULT 0,
    max_scroll INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS project_clicks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id INTEGER NOT NULL,
    project_title TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS form_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_type TEXT NOT NULL, -- 'start' ou 'submit'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS cta_clicks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    button_id TEXT NOT NULL, -- 'whatsapp_contact', 'email_contact', 'header_contact' etc
    path TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tentar adicionar a coluna max_scroll caso existam tabelas antigas (Ignora se já existir)
DO $$
BEGIN
    BEGIN
        ALTER TABLE page_views ADD COLUMN max_scroll INTEGER DEFAULT 0;
    EXCEPTION
        WHEN duplicate_column THEN null;
    END;
END $$;

-- ====== FORÇAR PERMISSÕES PÚBLICAS PARA MVP (Desliga a fechadura RLS) ====== --
-- 1. Garante que os tokens públicos possam acessar o ambiente público
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- 2. Concede controle total das tabelas para o token público
GRANT ALL ON TABLE page_views TO anon, authenticated;
GRANT ALL ON TABLE project_clicks TO anon, authenticated;
GRANT ALL ON TABLE form_events TO anon, authenticated;
GRANT ALL ON TABLE cta_clicks TO anon, authenticated;

-- 3. Desliga a checagem individual por linha (RLS)
ALTER TABLE page_views DISABLE ROW LEVEL SECURITY;
ALTER TABLE project_clicks DISABLE ROW LEVEL SECURITY;
ALTER TABLE form_events DISABLE ROW LEVEL SECURITY;
ALTER TABLE cta_clicks DISABLE ROW LEVEL SECURITY;
