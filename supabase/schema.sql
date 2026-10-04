-- ============================================================
-- Live engagement stats (views / likes / shares) for the portfolio.
-- Run this once in the SQL editor of your Supabase project.
-- ============================================================

create table if not exists public.site_engagement (
  id smallint primary key default 1,
  views bigint not null default 0,
  likes bigint not null default 0,
  shares bigint not null default 0,
  updated_at timestamptz not null default now(),
  constraint single_row check (id = 1)
);

insert into public.site_engagement (id, views, likes, shares)
values (1, 0, 0, 0)
on conflict (id) do nothing;

alter table public.site_engagement enable row level security;

-- Anyone (anon key) can read the counters.
create policy "Allow public read of engagement stats"
  on public.site_engagement
  for select
  using (true);

-- No insert/update/delete policies are defined, so the anon key can
-- never write to the table directly — all writes go through the
-- SECURITY DEFINER functions below, which only ever move a single
-- counter by exactly 1.

create or replace function public.increment_views()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.site_engagement
  set views = views + 1, updated_at = now()
  where id = 1;
end;
$$;

create or replace function public.increment_likes()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.site_engagement
  set likes = likes + 1, updated_at = now()
  where id = 1;
end;
$$;

create or replace function public.decrement_likes()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.site_engagement
  set likes = greatest(likes - 1, 0), updated_at = now()
  where id = 1;
end;
$$;

create or replace function public.increment_shares()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.site_engagement
  set shares = shares + 1, updated_at = now()
  where id = 1;
end;
$$;

revoke all on function public.increment_views() from public;
revoke all on function public.increment_likes() from public;
revoke all on function public.decrement_likes() from public;
revoke all on function public.increment_shares() from public;

grant execute on function public.increment_views() to anon, authenticated;
grant execute on function public.increment_likes() to anon, authenticated;
grant execute on function public.decrement_likes() to anon, authenticated;
grant execute on function public.increment_shares() to anon, authenticated;

-- After running this: go to Database → Replication in the dashboard and
-- enable Realtime for the `site_engagement` table so viewers see counts
-- update live without refreshing.
