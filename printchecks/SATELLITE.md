# CheckPrinter — OWeb satellite

CheckPrinter is the OWeb constellation app for professional check and payment-receipt printing.

## Deployment model

- **Hosting:** Vercel static deployment of this Vue app (`printchecks/`).
- **Data:** Client-side encrypted storage in the browser (no server database required for the current feature set).
- **Identity (roadmap):** Follow [OWeb Satellite Onboarding Kit](https://github.com/OneWeb-LLC/oweb/blob/main/docs/SATELLITE_ONBOARDING_KIT.md) when adding shared Supabase auth, SSO return, and optional `cp_*` cloud tables.

## Vercel

| Setting | Value |
|--------|--------|
| Root | Repository root |
| Build | `cd printchecks && npm install && npm run build` |
| Output | `printchecks/dist` |
| Framework | Vite (Vue) |

## OWeb registration

- **App id:** `checkprinter`
- **Launch URL:** production Vercel URL (see `ecosystem-apps.ts` in `OneWeb-LLC/oweb`)
