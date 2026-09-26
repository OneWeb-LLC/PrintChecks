# OWeb ecosystem registration (CheckPrinter)

Apply this in `OneWeb-LLC/oweb` when opening the companion PR.

## 1. Extend `EcosystemAppId` in `src/lib/ecosystem-apps.ts`

Add:

```ts
  | "checkprinter"
```

## 2. Add catalog entry to `ECOSYSTEM_APPS`

```ts
  {
    id: "checkprinter",
    name: "CheckPrinter",
    tagline: "Print checks and payment receipts for your workspace",
    description:
      "Professional check printing, vendors, bank accounts, receipts, and encrypted local history — joining the OWeb constellation with shared OneID when cloud sync is enabled.",
    status: "beta",
    launchUrl: "https://checkprinter-oweb.vercel.app",
    internalPath: null,
    iconKey: "oweb",
    category: "Operations",
    highlights: ["MICR-ready checks", "Encrypted local storage", "Receipt builder"],
    sortOrder: 20,
    activationScope: "workspace",
    packagesByTier: {
      free: "lite",
      starter: "standard",
      pro: "pro",
      team: "pro",
      scale: "enterprise",
    },
  },
```

Adjust `launchUrl` to match the final Vercel production domain.

## 3. Satellite onboarding

Follow `docs/SATELLITE_ONBOARDING_KIT.md` before marking App Store status `live`. Current PrintChecks deployment is static-only (no Supabase tables yet).
