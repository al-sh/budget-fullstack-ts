import React from 'react';
import { MenuSvgPath } from './MenuSvgPath';

export const StatIcon: React.FC<{ active?: boolean }> = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <MenuSvgPath
      active={active}
      d="M9.99998 1C9.70748 1 9.42219 1.01412 9.13719 1.03662C8.85219 1.06662 8.56068 1.11156 8.28318 1.16406C8.18568 1.17906 8.09487 1.20162 8.00487 1.22412C7.92237 1.23912 7.83999 1.26168 7.74999 1.28418C7.60749 1.32168 7.46476 1.3593 7.32226 1.4043C7.18726 1.4493 7.04563 1.49389 6.91063 1.54639C6.34813 1.74889 5.80069 2.01215 5.28319 2.32715C5.17819 2.39465 5.07325 2.46163 4.96825 2.53663C4.49575 2.85163 4.05232 3.21233 3.63232 3.63233C3.21232 4.05233 2.85308 4.49431 2.53808 4.96681C2.46308 5.07181 2.39465 5.17675 2.32715 5.28175C2.01215 5.79925 1.75035 6.34669 1.54785 6.90919C1.49535 7.04418 1.45076 7.18727 1.40576 7.32227C1.36076 7.46477 1.32314 7.6075 1.28564 7.75C1.26314 7.84 1.24058 7.92238 1.22558 8.00488C1.20308 8.09488 1.18052 8.18424 1.16552 8.28174C1.11302 8.55924 1.06808 8.8522 1.03809 9.13721C1.01559 9.42221 1 9.7075 1 10C1 10.2925 1.01559 10.5763 1.03809 10.8613C1.06808 11.1463 1.11302 11.4318 1.16552 11.7168C1.18052 11.8068 1.20308 11.9037 1.22558 11.9937C1.24058 12.0762 1.26314 12.16 1.28564 12.25C1.32314 12.3925 1.36076 12.5338 1.40576 12.6763C1.45076 12.8113 1.49535 12.9544 1.54785 13.0894C1.57785 13.1869 1.61564 13.2848 1.66064 13.3823C1.70564 13.5023 1.75756 13.6141 1.81006 13.7266C1.93756 14.0116 2.08012 14.2974 2.24512 14.5674C2.29012 14.6499 2.34203 14.7324 2.39453 14.8149C2.49953 14.9874 2.62024 15.1524 2.74024 15.3174C2.81524 15.4224 2.89047 15.5275 2.98047 15.625C3.17547 15.88 3.39983 16.1264 3.63233 16.3589C4.15733 16.8839 4.72697 17.3273 5.33447 17.6948C5.46947 17.7698 5.60506 17.8513 5.74756 17.9263C5.89756 18.0013 6.05459 18.0844 6.20459 18.1519C6.36209 18.2269 6.52024 18.294 6.67774 18.354C6.83524 18.414 6.9932 18.4744 7.15821 18.5269C8.05071 18.8269 9.01 19 10 19C11.0875 19 12.1305 18.79 13.1055 18.4375C13.2405 18.385 13.3674 18.3391 13.5024 18.2866C13.5174 18.2716 13.5329 18.2646 13.5479 18.2646C13.6904 18.1971 13.8404 18.13 13.9829 18.0625C14.2679 17.92 14.5448 17.7619 14.8223 17.5894C14.9573 17.5069 15.093 17.4173 15.228 17.3198C15.4905 17.1323 15.7452 16.9296 15.9927 16.7046C16.1202 16.5921 16.2404 16.4789 16.3604 16.3589C16.4654 16.2539 16.563 16.149 16.668 16.044C16.788 15.909 16.907 15.7675 17.0195 15.625C17.102 15.5275 17.1848 15.4224 17.2598 15.3174C17.3423 15.1974 17.4322 15.0772 17.5147 14.9497C17.5972 14.8222 17.6799 14.6949 17.7549 14.5674C17.9124 14.2974 18.0624 14.0116 18.1899 13.7266C18.2424 13.6141 18.2944 13.5023 18.3394 13.3823L18.4522 13.0894C18.5047 12.9544 18.5507 12.8113 18.5957 12.6763C18.6407 12.5338 18.6769 12.3925 18.7144 12.25C18.7369 12.16 18.7519 12.0762 18.7744 11.9937C18.7969 11.9037 18.8195 11.8068 18.8345 11.7168C18.887 11.4318 18.9319 11.1463 18.9619 10.8614C18.9844 10.5764 19 10.2925 19 10C19 9.82002 18.9929 9.6395 18.9854 9.4595C18.9704 9.2795 18.9551 9.10629 18.9326 8.92629C18.9176 8.75379 18.8879 8.58903 18.8579 8.41653V8.4092C18.8429 8.3042 18.813 8.20658 18.7905 8.10158L9.96193 9.96193L13.3296 1.64456C12.8871 1.45706 12.4294 1.32182 11.9644 1.21682C11.6344 1.14182 11.3058 1.0888 10.9683 1.0513C10.8183 1.0363 10.66 1.02218 10.5025 1.01468C10.3375 1.00718 10.1725 1.00003 10 1.00003L9.99998 1ZM15.2353 1.14941L12.685 7.43359L19.3677 6.03174C19.3602 5.98674 19.3447 5.94197 19.3222 5.89697C19.2622 5.70197 19.1951 5.5218 19.1201 5.3418C18.7151 4.3368 18.1144 3.44407 17.3344 2.66407C16.7194 2.04907 16.0153 1.53942 15.2353 1.14942V1.14941ZM13.5771 1.75C13.6371 1.78 13.7045 1.80935 13.772 1.83935V1.83203C13.712 1.80203 13.6446 1.7725 13.5771 1.75Z"
    />
  </svg>
);
