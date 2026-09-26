/** Canonical check canvas size (matches #check-box-print and checkbg scaling). */
export const CHECK_LAYOUT = {
  width: 1200,
  height: 500
} as const

/**
 * Y coordinate of horizontal rules on the 1200×500 canvas (px from top).
 * Field values use `.check-field-on-line` (translateY(-100%)) so the text bottom meets the rule.
 */
export const CHECK_LINE_Y = {
  date: 110,
  payee: 228,
  /** Bottom edge of the written-amount rule (dollar-line border). */
  amountWords: 268,
  memo: 421,
  signature: 421
} as const

/** Decorative line positions (shared between CheckPrinter and CheckRenderer). */
export const CHECK_LINE_POSITIONS = {
  dateLine: { top: `${CHECK_LINE_Y.date}px`, left: '900px', width: '155px' },
  payeeLine: { top: `${CHECK_LINE_Y.payee}px`, left: '150px', width: '790px' },
  amountBox: { top: '195px', left: '950px', width: '225px', height: '40px' },
  /** Container top; `.dollar-line` adds 20px margin before the rule at CHECK_LINE_Y.amountWords. */
  amountWordsLine: { top: `${CHECK_LINE_Y.amountWords - 20}px`, left: '60px' },
  amountWordsHandDrawn: { top: `${CHECK_LINE_Y.amountWords}px` },
  memoLine: { top: `${CHECK_LINE_Y.memo}px`, left: '115px', width: '300px' },
  signatureLine: { top: `${CHECK_LINE_Y.signature}px`, left: '750px', width: '360px' },
  signatureLabel: { top: `${CHECK_LINE_Y.signature + 5}px`, left: '750px', width: '360px' }
} as const

/**
 * Default absolute positions for non-line-anchored fields and horizontal offsets for line-anchored fields.
 */
export const DEFAULT_CHECK_FIELD_POSITIONS: Record<
  string,
  { top?: string; left?: string; right?: string; bottom?: string; textAlign?: string }
> = {
  accountHolderName: { top: '40px', left: '60px' },
  accountHolderAddress: { top: '70px', left: '60px' },
  checkNumber: { top: '40px', right: '50px' },
  date: { left: '850px' },
  payTo: { left: '180px' },
  amount: { left: '970px' },
  amountWords: { left: '100px' },
  bankName: { top: '300px', left: '60px' },
  memo: { left: '130px' },
  signature: { left: '770px' },
  bankInfo: { top: '435px', left: '0px' }
}

/** Wrapper style: anchor point on the rule; inner text is shifted up by its height. */
export function lineAnchorWrapperStyle(lineY: number, horizontal: { left?: string; right?: string }) {
  return {
    position: 'absolute' as const,
    top: `${lineY}px`,
    ...horizontal,
    lineHeight: '1'
  }
}
