export const modeTranslate = {
  DAY: 'Diária',
  WEEK: 'Semanal',
  BIWEEKLY: 'Quinzenal',
  MONTH: 'Mensal',
}

export const modesSelect = Object.entries(modeTranslate).map(
  ([key, value]) => ({
    key,
    value,
  }),
)
