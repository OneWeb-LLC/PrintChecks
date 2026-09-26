/** Canonical check canvas size (matches #check-box-print and checkbg scaling). */
export const CHECK_LAYOUT = {
  width: 1200,
  height: 500
} as const

/**
 * Default absolute positions for editable check field values on the 1200×500 canvas.
 * Aligned to template lines (date, payee, amount box, written amount, memo, signature).
 */
export const DEFAULT_CHECK_FIELD_POSITIONS: Record<
  string,
  { top?: string; left?: string; right?: string; bottom?: string; textAlign?: string }
> = {
  accountHolderName: { top: '40px', left: '60px' },
  accountHolderAddress: { top: '70px', left: '60px' },
  checkNumber: { top: '40px', right: '50px' },
  date: { top: '112px', left: '850px' },
  payTo: { top: '216px', left: '180px' },
  amount: { top: '232px', left: '970px' },
  amountWords: { top: '256px', left: '100px' },
  bankName: { top: '300px', left: '60px' },
  memo: { top: '408px', left: '130px' },
  signature: { top: '410px', left: '770px' },
  bankInfo: { top: '435px', left: '0px' }
}

/** Decorative line positions (shared between CheckPrinter and CheckRenderer). */
export const CHECK_LINE_POSITIONS = {
  dateLine: { top: '110px', left: '900px', width: '155px' },
  payeeLine: { top: '228px', left: '150px', width: '790px' },
  amountBox: { top: '195px', left: '950px', width: '225px', height: '40px' },
  /** Container top; `.dollar-line` adds 20px margin before the rule. */
  amountWordsLine: { top: '248px', left: '60px' },
  amountWordsHandDrawn: { top: '270px' },
  memoLine: { top: '421px', left: '115px', width: '300px' },
  signatureLine: { top: '421px', left: '750px', width: '360px' },
  signatureLabel: { top: '426px', left: '750px', width: '360px' }
} as const
