-- Rode este script na aba "SQL Editor" do Supabase

CREATE TABLE IF NOT EXISTS page_views (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    path TEXT NOT NULL,
    device TEXT,
    time_spent INTEGER DEFAULT 0,
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

-- Políticas de RLS (Para permitir inserção pública mas leitura apenas autenticada ou via chave privada se desejado)
-- Para simplificar o MVP (já que o frontend usará a ANON KEY para inserir):
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_events ENABLE ROW LEVEL SECURITY;

-- Permitir INSERT para todos (anon)
CREATE POLICY "Allow public inserts on page_views" ON page_views FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public inserts on project_clicks" ON project_clicks FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public inserts on form_events" ON form_events FOR INSERT TO public WITH CHECK (true);

-- Permitir SELECT (Leitura) apenas para gerar o Admin Dashboard através do React Admin usando a Anon Key 
-- (Idealmente restringir, mas como usaremos apenas a Anon Key no FrontEnd Client do Dashboard):
CREATE POLICY "Allow public select on page_views" ON page_views FOR SELECT TO public USING (true);
CREATE POLICY "Allow public select on project_clicks" ON project_clicks FOR SELECT TO public USING (true);
CREATE POLICY "Allow public select on form_events" ON form_events FOR SELECT TO public USING (true);

-- Caso fosse usar a anon_key também para update do tempo
CREATE POLICY "Allow public updates on page_views" ON page_views FOR UPDATE TO public USING (true);
