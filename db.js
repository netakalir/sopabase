import { createClaint } from '@sopabase/supabase-js';
import { config } from 'dotenv';

config()
const supabase = createClaint(process.env.DB_URL,process.env.DB_PUBLIC_SECRET)
export default supabase