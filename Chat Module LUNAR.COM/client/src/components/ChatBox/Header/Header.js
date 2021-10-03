import React from 'react';
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <div className="header-title__logo">
          <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.4729 18.0041C40.4729 15.3262 37.1153 12.7883 31.9675 11.2145C33.1555 5.97391 32.6275 1.80453 30.3011 0.469672C29.7649 0.156557 29.1379 0.00823975 28.4532 0.00823975V1.84573C28.8326 1.84573 29.1379 1.91989 29.3936 2.05997C30.5156 2.70268 31.0023 5.14992 30.6228 8.29755C30.5321 9.0721 30.3836 9.88785 30.2021 10.7201C28.5851 10.3246 26.8197 10.0197 24.9635 9.82193C23.8498 8.29755 22.6949 6.91325 21.5317 5.70199C24.2211 3.20531 26.7455 1.83749 28.4614 1.83749V0C26.1927 0 23.2229 1.61502 20.22 4.41657C17.2171 1.6315 14.2472 0.0329596 11.9785 0.0329596V1.87045C13.6862 1.87045 16.2189 3.23003 18.9083 5.71023C17.7533 6.92149 16.5984 8.29755 15.5012 9.82193C13.6367 10.0197 11.8713 10.3246 10.2544 10.7283C10.0646 9.90433 9.92437 9.10506 9.82537 8.33875C9.43764 5.19112 9.91612 2.74388 11.0298 2.09293C11.2773 1.94461 11.5991 1.87869 11.9785 1.87869V0.0411994C11.2856 0.0411994 10.6586 0.189517 10.1141 0.502632C7.79595 1.83749 7.27622 5.99863 8.47242 11.2227C3.34112 12.8048 0 15.3344 0 18.0041C0 20.6821 3.35762 23.22 8.50542 24.7938C7.31747 30.0343 7.84545 34.2037 10.1719 35.5386C10.7081 35.8517 11.3351 36 12.028 36C14.2967 36 17.2666 34.385 20.2695 31.5834C23.2724 34.3685 26.2422 35.967 28.5109 35.967C29.2039 35.967 29.8309 35.8187 30.3753 35.5056C32.6935 34.1707 33.2132 30.0096 32.017 24.7855C37.1318 23.2117 40.4729 20.6738 40.4729 18.0041ZM29.7319 12.5081C29.4266 13.5711 29.0471 14.667 28.6181 15.7629C28.2799 15.1037 27.9252 14.4445 27.5374 13.7853C27.158 13.1261 26.7537 12.4834 26.3495 11.8572C27.5209 12.0302 28.6511 12.2444 29.7319 12.5081ZM25.9535 21.2836C25.31 22.396 24.6501 23.4507 23.9653 24.4312C22.7361 24.5383 21.4904 24.596 20.2365 24.596C18.9908 24.596 17.7451 24.5383 16.5241 24.4395C15.8394 23.4589 15.1712 22.4125 14.5277 21.3083C13.9007 20.2289 13.3315 19.133 12.8118 18.0288C13.3232 16.9247 13.9007 15.8206 14.5194 14.7411C15.1629 13.6287 15.8229 12.574 16.5076 11.5935C17.7368 11.4864 18.9825 11.4287 20.2365 11.4287C21.4822 11.4287 22.7279 11.4864 23.9488 11.5853C24.6336 12.5658 25.3018 13.6123 25.9453 14.7164C26.5722 15.7958 27.1415 16.8917 27.6612 17.9959C27.1415 19.1 26.5722 20.2042 25.9535 21.2836ZM28.6181 20.2124C29.0636 21.3165 29.4431 22.4207 29.7566 23.4919C28.6759 23.7555 27.5374 23.978 26.3577 24.1511C26.762 23.5166 27.1662 22.8656 27.5457 22.1982C27.9252 21.539 28.2799 20.8716 28.6181 20.2124ZM20.253 29.0043C19.4858 28.2133 18.7185 27.3317 17.9596 26.3676C18.702 26.4005 19.461 26.4253 20.2282 26.4253C21.0037 26.4253 21.7709 26.4088 22.5216 26.3676C21.7792 27.3317 21.0119 28.2133 20.253 29.0043ZM14.1152 24.1511C12.9438 23.978 11.8135 23.7638 10.7328 23.5001C11.0381 22.4372 11.4176 21.3413 11.8465 20.2454C12.1848 20.9046 12.5395 21.5637 12.9273 22.2229C13.315 22.8821 13.711 23.5248 14.1152 24.1511ZM20.2117 7.00389C20.9789 7.79492 21.7462 8.67658 22.5051 9.64065C21.7627 9.60769 21.0037 9.58297 20.2365 9.58297C19.461 9.58297 18.6938 9.59945 17.9431 9.64065C18.6855 8.67658 19.4528 7.79492 20.2117 7.00389ZM14.107 11.8572C13.7027 12.4916 13.2985 13.1426 12.919 13.81C12.5395 14.4692 12.1848 15.1284 11.8465 15.7876C11.4011 14.6835 11.0216 13.5793 10.7081 12.5081C11.7888 12.2527 12.9273 12.0302 14.107 11.8572ZM6.641 22.1735C3.72061 20.9293 1.83143 19.2978 1.83143 18.0041C1.83143 16.7105 3.72061 15.0707 6.641 13.8347C7.35047 13.5299 8.12594 13.258 8.92616 13.0025C9.39639 14.6175 10.0151 16.2985 10.7823 18.0206C10.0234 19.7345 9.41289 21.4072 8.95091 23.014C8.13419 22.7585 7.35872 22.4784 6.641 22.1735ZM11.0793 33.9483C9.95737 33.3056 9.47064 30.8583 9.85012 27.7107C9.94087 26.9361 10.0894 26.1204 10.2709 25.2882C11.8878 25.6837 13.6532 25.9886 15.5094 26.1863C16.6231 27.7107 17.7781 29.095 18.9413 30.3062C16.2519 32.8029 13.7275 34.1707 12.0115 34.1707C11.6403 34.1625 11.3268 34.0883 11.0793 33.9483ZM30.6476 27.6695C31.0353 30.8171 30.5568 33.2644 29.4431 33.9153C29.1956 34.0636 28.8739 34.1295 28.4944 34.1295C26.7867 34.1295 24.2541 32.77 21.5647 30.2898C22.7196 29.0785 23.8746 27.7024 24.9718 26.1781C26.8362 25.9803 28.6016 25.6754 30.2186 25.2717C30.4083 26.1039 30.5568 26.9032 30.6476 27.6695ZM33.8237 22.1735C33.1142 22.4784 32.3388 22.7503 31.5385 23.0057C31.0683 21.3907 30.4496 19.7098 29.6824 17.9876C30.4413 16.2737 31.0518 14.6011 31.5138 12.9943C32.3305 13.2497 33.106 13.5299 33.8319 13.8347C36.7523 15.079 38.6415 16.7105 38.6415 18.0041C38.6333 19.2978 36.7441 20.9375 33.8237 22.1735Z" fill="#61DAFB"/>
            <path d="M20.2282 21.7698C22.3104 21.7698 23.9983 20.0839 23.9983 18.0042C23.9983 15.9245 22.3104 14.2386 20.2282 14.2386C18.1461 14.2386 16.4581 15.9245 16.4581 18.0042C16.4581 20.0839 18.1461 21.7698 20.2282 21.7698Z" fill="#61DAFB"/>
          </svg>
        </div>
        <div className="header-title__heading">
          <p>
            LUNA.COM Chat<br/>
            <span>Lets Connect eatch other</span>
          </p>
        </div>
      </div>
      <div className="header-tools">
        <span>Tools:</span>
        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 10.2314C23 8.70957 21.0919 7.26734 18.1665 6.37297C18.8416 3.39486 18.5416 1.02548 17.2195 0.266906C16.9148 0.0889685 16.5585 0.00468249 16.1694 0.00468249V1.04889C16.385 1.04889 16.5585 1.09104 16.7038 1.17064C17.3414 1.53588 17.618 2.9266 17.4024 4.71534C17.3508 5.1555 17.2664 5.61907 17.1633 6.09201C16.2444 5.86725 15.2411 5.69399 14.1863 5.58161C13.5534 4.71534 12.8971 3.92867 12.236 3.24033C13.7644 1.82152 15.1989 1.04421 16.1741 1.04421V0C14.8848 0 13.1971 0.917782 11.4906 2.50985C9.78414 0.927148 8.09641 0.0187303 6.80717 0.0187303V1.06294C7.77762 1.06294 9.21688 1.83556 10.7452 3.24502C10.0889 3.93335 9.43253 4.71534 8.80901 5.58161C7.74949 5.69399 6.74623 5.86725 5.82735 6.0967C5.71953 5.62844 5.63983 5.17423 5.58357 4.73875C5.36323 2.95001 5.63514 1.55929 6.26804 1.18937C6.40868 1.10508 6.59152 1.06762 6.80717 1.06762V0.0234128C6.41337 0.0234128 6.05707 0.107699 5.74766 0.285636C4.43029 1.04421 4.13494 3.4089 4.81472 6.37765C1.8987 7.2767 0 8.71425 0 10.2314C0 11.7532 1.90807 13.1955 4.83347 14.0898C4.15838 17.0679 4.45842 19.4373 5.78047 20.1959C6.0852 20.3738 6.4415 20.4581 6.8353 20.4581C8.12454 20.4581 9.81227 19.5403 11.5188 17.9483C13.2252 19.531 14.913 20.4394 16.2022 20.4394C16.596 20.4394 16.9523 20.3551 17.2617 20.1772C18.5791 19.4186 18.8744 17.0539 18.1947 14.0851C21.1013 13.1908 23 11.7485 23 10.2314ZM16.896 7.10813C16.7226 7.71218 16.5069 8.33496 16.2631 8.95774C16.0709 8.58313 15.8693 8.20853 15.649 7.83393C15.4333 7.45932 15.2036 7.09408 14.9739 6.73821C15.6396 6.83654 16.2819 6.95829 16.896 7.10813ZM14.7489 12.0951C14.3832 12.7272 14.0082 13.3266 13.619 13.8838C12.9205 13.9447 12.2126 13.9774 11.5 13.9774C10.7921 13.9774 10.0842 13.9447 9.39034 13.8885C9.00122 13.3313 8.62148 12.7366 8.25581 12.1091C7.89951 11.4957 7.57603 10.8729 7.28068 10.2454C7.57134 9.61798 7.89951 8.99052 8.25112 8.3771C8.6168 7.74496 8.99185 7.14559 9.38096 6.58836C10.0795 6.52749 10.7874 6.49471 11.5 6.49471C12.2079 6.49471 12.9158 6.52749 13.6097 6.58368C13.9988 7.14091 14.3785 7.73559 14.7442 8.36306C15.1005 8.97647 15.424 9.59925 15.7193 10.2267C15.424 10.8542 15.1005 11.4816 14.7489 12.0951ZM16.2631 11.4863C16.5163 12.1138 16.732 12.7413 16.9101 13.35C16.296 13.4998 15.649 13.6263 14.9786 13.7246C15.2083 13.364 15.438 12.9941 15.6537 12.6148C15.8693 12.2402 16.0709 11.8609 16.2631 11.4863ZM11.5094 16.4826C11.0734 16.0331 10.6374 15.5321 10.2061 14.9842C10.628 15.0029 11.0593 15.017 11.4953 15.017C11.936 15.017 12.372 15.0076 12.7986 14.9842C12.3767 15.5321 11.9407 16.0331 11.5094 16.4826ZM8.0214 13.7246C7.35569 13.6263 6.71341 13.5045 6.09927 13.3547C6.27273 12.7506 6.48838 12.1278 6.73216 11.5051C6.92438 11.8797 7.12597 12.2543 7.34631 12.6289C7.56665 13.0035 7.79168 13.3687 8.0214 13.7246ZM11.4859 3.98018C11.9219 4.4297 12.3579 4.93074 12.7892 5.4786C12.3673 5.45987 11.936 5.44582 11.5 5.44582C11.0593 5.44582 10.6233 5.45518 10.1967 5.4786C10.6186 4.93074 11.0546 4.4297 11.4859 3.98018ZM8.01672 6.73821C7.787 7.09876 7.55728 7.46869 7.34162 7.84797C7.12597 8.22258 6.92438 8.59718 6.73216 8.97179C6.479 8.34433 6.26335 7.71686 6.0852 7.10813C6.69935 6.96297 7.34631 6.83654 8.01672 6.73821ZM3.77395 12.6008C2.11435 11.8937 1.04077 10.9666 1.04077 10.2314C1.04077 9.49623 2.11435 8.56441 3.77395 7.86202C4.17713 7.68877 4.61782 7.53424 5.07256 7.38908C5.33979 8.30686 5.6914 9.26211 6.1274 10.2408C5.69609 11.2147 5.34916 12.1653 5.08663 13.0784C4.6225 12.9332 4.18182 12.774 3.77395 12.6008ZM6.29617 19.2922C5.65858 18.9269 5.38198 17.5362 5.59764 15.7475C5.64921 15.3073 5.73359 14.8437 5.83673 14.3708C6.75561 14.5955 7.75887 14.7688 8.8137 14.8812C9.4466 15.7475 10.1029 16.5341 10.764 17.2225C9.23563 18.6413 7.80106 19.4186 6.82593 19.4186C6.61496 19.4139 6.43681 19.3718 6.29617 19.2922ZM17.4164 15.724C17.6368 17.5128 17.3649 18.9035 16.732 19.2734C16.5913 19.3577 16.4085 19.3952 16.1928 19.3952C15.2224 19.3952 13.7831 18.6225 12.2548 17.2131C12.9111 16.5248 13.5675 15.7428 14.191 14.8765C15.2505 14.7641 16.2538 14.5909 17.1726 14.3614C17.2805 14.8344 17.3649 15.2886 17.4164 15.724ZM19.2214 12.6008C18.8182 12.774 18.3775 12.9286 17.9227 13.0737C17.6555 12.1559 17.3039 11.2007 16.8679 10.222C17.2992 9.24806 17.6461 8.2975 17.9087 7.3844C18.3728 7.52956 18.8135 7.68877 19.226 7.86202C20.8856 8.56909 21.9592 9.49623 21.9592 10.2314C21.9545 10.9666 20.881 11.8984 19.2214 12.6008Z" fill="#61DAFB"/>
          <path d="M11.4953 12.3713C12.6786 12.3713 13.6378 11.4133 13.6378 10.2314C13.6378 9.04956 12.6786 8.09148 11.4953 8.09148C10.3121 8.09148 9.35284 9.04956 9.35284 10.2314C9.35284 11.4133 10.3121 12.3713 11.4953 12.3713Z" fill="#61DAFB"/>
        </svg>
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19.9629C8.7205 19.9629 8.45963 19.8895 8.21739 19.7612L5.73913 18.3123C5.36646 18.1106 5.5528 18.0372 5.6646 18.0005C6.1677 17.8355 6.26087 17.7988 6.78261 17.5054C6.83851 17.4687 6.91304 17.487 6.96894 17.5237L8.86957 18.6424C8.9441 18.6791 9.03727 18.6791 9.09317 18.6424L16.528 14.4059C16.6025 14.3692 16.6398 14.2959 16.6398 14.2042V5.74953C16.6398 5.65783 16.6025 5.58447 16.528 5.54779L9.09317 1.32964C9.01863 1.29296 8.92547 1.29296 8.86957 1.32964L1.43478 5.54779C1.36025 5.58447 1.32298 5.67617 1.32298 5.74953V14.2042C1.32298 14.2775 1.36025 14.3692 1.43478 14.4059L3.46584 15.5613C4.56522 16.1115 5.25466 15.4696 5.25466 14.8277V6.48313C5.25466 6.37309 5.34783 6.26305 5.47826 6.26305H6.42857C6.54037 6.26305 6.65217 6.35475 6.65217 6.48313V14.8277C6.65217 16.2766 5.85093 17.1202 4.45342 17.1202C4.02484 17.1202 3.68944 17.1202 2.73913 16.6617L0.782609 15.5613C0.298137 15.2862 0 14.7727 0 14.2225V5.76787C0 5.21768 0.298137 4.70416 0.782609 4.42907L8.21739 0.192568C8.68323 -0.0641893 9.31677 -0.0641893 9.78261 0.192568L17.2174 4.42907C17.7019 4.70416 18 5.21768 18 5.76787V14.2225C18 14.7727 17.7019 15.2862 17.2174 15.5613L9.78261 19.7978C9.54037 19.9079 9.26087 19.9629 9 19.9629ZM11.2919 14.1492C8.03106 14.1492 7.36025 12.682 7.36025 11.4349C7.36025 11.3248 7.45342 11.2148 7.58385 11.2148H8.5528C8.6646 11.2148 8.75776 11.2882 8.75776 11.3982C8.90683 12.3702 9.3354 12.847 11.3106 12.847C12.8758 12.847 13.5466 12.4986 13.5466 11.6733C13.5466 11.1965 13.3602 10.848 10.9193 10.6096C8.8882 10.4078 7.62112 9.96769 7.62112 8.37213C7.62112 6.8866 8.8882 6.00629 11.0124 6.00629C13.3975 6.00629 14.5714 6.81324 14.7205 8.57386C14.7205 8.62888 14.7019 8.6839 14.6646 8.73892C14.6273 8.7756 14.5714 8.81228 14.5155 8.81228H13.5466C13.4534 8.81228 13.3602 8.73892 13.3416 8.64722C13.118 7.63853 12.5404 7.30842 11.0124 7.30842C9.29814 7.30842 9.09317 7.89529 9.09317 8.33545C9.09317 8.8673 9.3354 9.03236 11.646 9.3258C13.9379 9.61923 15.0186 10.041 15.0186 11.6183C15 13.2322 13.6584 14.1492 11.2919 14.1492Z" fill="#539E43"/>
        </svg>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.78143 0.519046C9.05021 -0.0627896 11.5577 0.276257 13.5586 1.51116C16.0786 3.01816 17.7238 5.86884 17.7656 8.80326C17.8577 11.7669 16.313 14.7056 13.8307 16.3172C11.0679 18.1758 7.24606 18.247 4.42462 16.4805C1.54884 14.7641 -0.129803 11.3023 0.301424 7.97857C0.648768 4.46646 3.36143 1.36884 6.78143 0.519116V0.519046Z" fill="#010101"/>
          <path d="M6.43394 1.9549C10.7205 0.238576 15.9782 3.40742 16.4218 8.00374C17.1126 12.1395 13.68 16.3423 9.48972 16.4637C5.50462 16.8614 1.65347 13.4832 1.54047 9.48143C1.24326 6.24143 3.37816 3.02653 6.43394 1.9549Z" fill="white"/>
          <path d="M6.86509 8.55632C8.78652 6.98652 10.666 5.3623 12.6293 3.83856C11.5995 5.42094 10.5405 6.9823 9.51067 8.56462C8.6274 8.56884 7.74421 8.56884 6.86509 8.55625V8.55632ZM8.48931 9.43115C9.37672 9.43115 10.26 9.43115 11.1433 9.44373C9.20931 11.0051 7.33815 12.6418 5.37067 14.1614C6.40046 12.579 7.45951 11.0135 8.48931 9.43115Z" fill="#010101"/>
        </svg>
      </div>
    </div>
  )
}

export default Header