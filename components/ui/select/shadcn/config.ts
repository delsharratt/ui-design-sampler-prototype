export const FRUIT_OPTIONS = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' }
] as const;

export const TIMEZONE_OPTIONS = [
  {
    group: 'North America',
    items: [
      { label: 'Eastern Standard Time (EST)', value: 'est' },
      { label: 'Central Standard Time (CST)', value: 'cst' },
      { label: 'Mountain Standard Time (MST)', value: 'mst' },
      { label: 'Pacific Standard Time (PST)', value: 'pst' },
      { label: 'Alaska Standard Time (AKST)', value: 'akst' },
      { label: 'Hawaii Standard Time (HST)', value: 'hst' }
    ]
  },
  {
    group: 'Europe & Africa',
    items: [
      { label: 'Greenwich Mean Time (GMT)', value: 'gmt' },
      { label: 'Central European Time (CET)', value: 'cet' },
      { label: 'Eastern European Time (EET)', value: 'eet' },
      { label: 'Western European Summer Time (WEST)', value: 'west' },
      { label: 'Central Africa Time (CAT)', value: 'cat' },
      { label: 'East Africa Time (EAT)', value: 'eat' }
    ]
  },
  {
    group: 'Asia',
    items: [
      { label: 'Moscow Time (MSK)', value: 'msk' },
      { label: 'India Standard Time (IST)', value: 'ist' },
      { label: 'China Standard Time (CST)', value: 'cst_china' },
      { label: 'Japan Standard Time (JST)', value: 'jst' },
      { label: 'Korea Standard Time (KST)', value: 'kst' },
      { label: 'Indonesia Central Standard Time (WITA)', value: 'ist_indonesia' }
    ]
  },
  {
    group: 'Australia & Pacific',
    items: [
      { label: 'Australian Western Standard Time (AWST)', value: 'awst' },
      { label: 'Australian Central Standard Time (ACST)', value: 'acst' },
      { label: 'Australian Eastern Standard Time (AEST)', value: 'aest' },
      { label: 'New Zealand Standard Time (NZST)', value: 'nzst' },
      { label: 'Fiji Time (FJT)', value: 'fjt' }
    ]
  },
  {
    group: 'South America',
    items: [
      { label: 'Argentina Time (ART)', value: 'art' },
      { label: 'Bolivia Time (BOT)', value: 'bot' },
      { label: 'Brasilia Time (BRT)', value: 'brt' },
      { label: 'Chile Standard Time (CLT)', value: 'clt' }
    ]
  }
] as const;
