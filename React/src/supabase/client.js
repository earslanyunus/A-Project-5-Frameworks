import { createClient } from '@supabase/supabase-js'
import { store } from '../store/store'
import { login } from '../store/authStore'
export const supabase = createClient(`${import.meta.env.VITE_SUPABASE_PROJECT_URL}`, `${import.meta.env.VITE_SUPABASE_PROJECT_KEY}`)
let user = null

supabase.auth.getSession().then(({ data: { session } }) => {
    user = session
    store.dispatch(login(user))
  })

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    user = session
    store.dispatch(login(user))
  })
