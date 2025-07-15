import { createClaint } from '@supabase/supabase-js';
import { config } from 'dotenv';

config()
const supabase = createClaint(process.env.DB_URL,process.env.DB_PUBLIC_SECRET)
export default supabase