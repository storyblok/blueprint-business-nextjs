import type { BackgroundColor } from '../content';
export const backgroundColor = (backgroundColor: BackgroundColor): string => {
  switch (backgroundColor) {
    case 'beige':
      return 'bg-[#f4f2e9]';
    case 'white':
      return 'bg-white';
    case 'grey':
      return 'bg-[#f5f5f7]';
    case 'purple':
      return 'bg-[#D9D4FC]';
    case 'orange':
      return 'bg-[#FFE7D3]';
    case 'yellow':
      return 'bg-[#F2F1D7]';
    case 'green':
      return 'bg-[#C3F0CC]';
    case 'pink':
      return 'bg-[#FECCD4]';
    case 'blue':
      return 'bg-[#D9DFF6]';
  }
}