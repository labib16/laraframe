collapseSidebar = document.querySelector('#collapse-sidebar')

let reserveHtml =  `<div class="text-sm text-white font-bold">
<div class="pb-5">
    <a class="flex justify-center" href="javascript:;">
        <img class="menuLogo px-12 pt-[21px] 2xl:pt-8" src="./src/assets/image/Logo.svg" alt="">
        <img class="menuLogo w-12 pt-4 2xl:pt-6 hidden" src="./src/assets/image/logoSm.png" alt="">
    </a>
</div>
</div>
<div class="root-item curve-design drop-down-item duration-300 ml-6">
    <ul class="bg-lara-secondary">
        <li class="relative">
          <a href="javascript:;"
             title="Dashboard" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-4 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
              <span class="flex items-center font-medium">
              <span>
                  <span class="p-1.5 text-xs w-7 h-7 flex items-center justify-center rounded-md border-[1.5px] border-white">
                      <svg viewBox="0 0 12 10" fill="none">
                          <path d="M7.12966 9.69294V6.38384H4.89595V9.68663C3.7169 9.68663 2.59463 9.70286 1.47417 9.67492C1.18572 9.6677 0.992816 9.44055 0.991914 9.11784C0.990112 7.78014 0.987407 6.44153 0.998224 5.10383C0.999126 4.98845 1.06944 4.83882 1.15687 4.7649C2.73976 3.44973 4.32986 2.14358 5.91906 0.835624C5.94159 0.817595 5.97224 0.809483 6.02903 0.78244C7.12966 1.68927 8.24201 2.6051 9.35255 3.52094C9.74647 3.84545 10.1206 4.19881 10.5379 4.49087C10.9084 4.75048 11.0355 5.05335 11.0229 5.50406C10.9904 6.6759 11.0067 7.84955 11.0157 9.02139C11.0184 9.39818 10.8606 9.67221 10.4937 9.68123C9.38681 9.70917 8.27897 9.69114 7.13056 9.69114L7.12966 9.69294Z" fill="white"/>
                      </svg>
                  </span>
              </span>
              <span class="menu-title px-3">Dashboard</span>
          </span>
          </a>
        </li>
        <li class="relative">
          <a href="javascript:;"
             title="Application Control" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-4 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
              <span class="flex items-center font-medium">
              <span>
                  <span class="p-1.5 text-xs w-7 h-7 flex items-center justify-center rounded-md border-[1.5px] border-white">
                  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4879 1.95792H7.09696C6.87232 1.14881 6.12944 0.552734 5.24932 0.552734C4.3692 0.552734 3.62632 1.14881 3.40168 1.95792H0.512095C0.229419 1.95792 0 2.18734 0 2.47002C0 2.7527 0.229419 2.98211 0.512095 2.98211H3.40168C3.62632 3.79123 4.3692 4.3873 5.24932 4.3873C6.12944 4.3873 6.87232 3.79123 7.09696 2.98211H13.4879C13.7706 2.98211 14 2.7527 14 2.47002C14 2.18734 13.7706 1.95792 13.4879 1.95792ZM5.25 3.36311C4.75771 3.36311 4.35691 2.96231 4.35691 2.47002C4.35691 1.97772 4.75771 1.57693 5.25 1.57693C5.74229 1.57693 6.14309 1.97772 6.14309 2.47002C6.14309 2.96231 5.74229 3.36311 5.25 3.36311Z" fill="white"/>
                  <path d="M13.4879 10.87H7.09696C6.87232 10.0609 6.12944 9.46484 5.24932 9.46484C4.3692 9.46484 3.62632 10.0609 3.40168 10.87H0.512095C0.229419 10.87 0 11.0995 0 11.3821C0 11.6648 0.229419 11.8942 0.512095 11.8942H3.40168C3.62632 12.7033 4.3692 13.2994 5.24932 13.2994C6.12944 13.2994 6.87232 12.7033 7.09696 11.8942H13.4879C13.7706 11.8942 14 11.6648 14 11.3821C14 11.0995 13.7706 10.87 13.4879 10.87V10.87ZM5.25 12.2752C4.75771 12.2752 4.35691 11.8744 4.35691 11.3821C4.35691 10.8898 4.75771 10.489 5.25 10.489C5.74229 10.489 6.14309 10.8898 6.14309 11.3821C6.14309 11.8744 5.74229 12.2752 5.25 12.2752Z" fill="white"/>
                  <path d="M0 6.92607C0 7.20875 0.229419 7.43817 0.512095 7.43817H6.90304C7.12768 8.24728 7.87056 8.84336 8.75068 8.84336C9.6308 8.84336 10.3737 8.24728 10.5983 7.43817H13.4879C13.7706 7.43817 14 7.20875 14 6.92607C14 6.6434 13.7706 6.41398 13.4879 6.41398H10.5983C10.3737 5.60487 9.6308 5.00879 8.75068 5.00879C7.87056 5.00879 7.12768 5.60487 6.90304 6.41398H0.512095C0.229419 6.41398 0 6.6434 0 6.92607ZM7.85691 6.92607C7.85691 6.43378 8.25771 6.03298 8.75 6.03298C9.24229 6.03298 9.64309 6.43378 9.64309 6.92607C9.64309 7.41837 9.24229 7.81917 8.75 7.81917C8.25771 7.81917 7.85691 7.41837 7.85691 6.92607V6.92607Z" fill="white"/>
                  </svg>                  
                  </span>
              </span>
              <span class="menu-title px-3">Application Control</span>
              </span>
              <svg class="duration-300 menu-arrow ml-auto" width="7" height="11" viewBox="0 0 7 11" fill="none">
                  <path d="M6.66323 4.98326C6.73019 5.05022 6.76367 5.12723 6.76367 5.21429C6.76367 5.30134 6.73019 5.37835 6.66323 5.44531L1.98242 10.1261C1.91546 10.1931 1.83845 10.2266 1.7514 10.2266C1.66434 10.2266 1.58733 10.1931 1.52037 10.1261L1.01814 9.62388C0.951172 9.55692 0.91769 9.47991 0.91769 9.39286C0.91769 9.3058 0.951172 9.22879 1.01814 9.16183L4.96568 5.21429L1.01814 1.26674C0.951172 1.19978 0.91769 1.12277 0.91769 1.03571C0.91769 0.94866 0.951172 0.871651 1.01814 0.804688L1.52037 0.302455C1.58733 0.23549 1.66434 0.202008 1.7514 0.202008C1.83845 0.202008 1.91546 0.23549 1.98242 0.302455L6.66323 4.98326Z" fill="#E5E5E5" fill-opacity="0.8"/>
                  </svg>
          </a>
          <div class="drop-down-item overflow-hidden ml-6" data-collapse="false" style="height: 0px;">
            <ul class="bg-lara-secondary space-y-3">
                <li class="relative">
                    <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                            <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                        </svg>
                    </span>
                    <a href="application_setting.html"
                    title="Application Setting" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                     <span class="pr-2 flex items-center text-sm">
                     Application Setting
                     </span>
                    </a>
                </li>
                <li class="relative">
                    <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                            <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                        </svg>
                    </span>
                    <a href="javascript:;"
                    title="Role Management" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                     <span class="pr-2 flex items-center text-sm">
                        Role Management
                     </span>
                     <svg class="duration-300 ml-auto" width="7" height="11" viewBox="0 0 7 11" fill="none">
                    <path d="M6.66323 4.98326C6.73019 5.05022 6.76367 5.12723 6.76367 5.21429C6.76367 5.30134 6.73019 5.37835 6.66323 5.44531L1.98242 10.1261C1.91546 10.1931 1.83845 10.2266 1.7514 10.2266C1.66434 10.2266 1.58733 10.1931 1.52037 10.1261L1.01814 9.62388C0.951172 9.55692 0.91769 9.47991 0.91769 9.39286C0.91769 9.3058 0.951172 9.22879 1.01814 9.16183L4.96568 5.21429L1.01814 1.26674C0.951172 1.19978 0.91769 1.12277 0.91769 1.03571C0.91769 0.94866 0.951172 0.871651 1.01814 0.804688L1.52037 0.302455C1.58733 0.23549 1.66434 0.202008 1.7514 0.202008C1.83845 0.202008 1.91546 0.23549 1.98242 0.302455L6.66323 4.98326Z" fill="#E5E5E5" fill-opacity="0.8"/>
                    </svg>
                 </a>
                 <div class="drop-down-item overflow-hidden ml-6" data-collapse="false" style="height: 0px;">
                    <ul class="bg-lara-secondary space-y-3">
                        <li class="relative">
                            <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                                <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                                    <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                                </svg>
                            </span>
                            <a href="role_management_list.html"
                            title="role management" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                             <span class="pr-2 flex items-center text-sm">
                             role management
                             </span>
                            </a>
                        </li>
                        <li class="relative">
                            <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                                <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                                    <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                                </svg>
                            </span>
                            <a href="role_permissions.html"
                            title="role permission" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                             <span class="pr-2 flex items-center text-sm">
                             role permission
                             </span>
                            </a>
                        </li>
                    </ul>
                 </div>
              </li>
                <li class="relative">
                        <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                            <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                                <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                            </svg>
                        </span>
                        <a href="javascript:;"
                        title="Language management" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                        <span class="pr-2 flex items-center text-sm">
                            Language management
                        </span>
                        <svg class="duration-300 ml-auto" width="7" height="11" viewBox="0 0 7 11" fill="none">
                        <path d="M6.66323 4.98326C6.73019 5.05022 6.76367 5.12723 6.76367 5.21429C6.76367 5.30134 6.73019 5.37835 6.66323 5.44531L1.98242 10.1261C1.91546 10.1931 1.83845 10.2266 1.7514 10.2266C1.66434 10.2266 1.58733 10.1931 1.52037 10.1261L1.01814 9.62388C0.951172 9.55692 0.91769 9.47991 0.91769 9.39286C0.91769 9.3058 0.951172 9.22879 1.01814 9.16183L4.96568 5.21429L1.01814 1.26674C0.951172 1.19978 0.91769 1.12277 0.91769 1.03571C0.91769 0.94866 0.951172 0.871651 1.01814 0.804688L1.52037 0.302455C1.58733 0.23549 1.66434 0.202008 1.7514 0.202008C1.83845 0.202008 1.91546 0.23549 1.98242 0.302455L6.66323 4.98326Z" fill="#E5E5E5" fill-opacity="0.8"/>
                        </svg>
                    </a>
                    <div class="drop-down-item overflow-hidden ml-6" data-collapse="false" style="height: 0px;">
                        <ul class="bg-lara-secondary space-y-3">
                            <li class="relative">
                                <div class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                                    <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                                        <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                                    </svg>
                                </div>
                                <a href="language_list.html"
                                title="language list" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                                <span class="pr-2 flex items-center text-sm">
                                language list
                                </span>
                                </a>
                            </li>
                            <li class="relative">
                                <div class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                                    <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                                        <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                                    </svg>
                                </div>
                                <a href="language_setting.html"
                                title="language setting" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                                <span class="pr-2 flex items-center text-sm">
                                language setting
                                </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="relative">
                    <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                            <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                        </svg>
                    </span>
                        <a href="javascript:;"
                        title="Menu Manager" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                        <span class="pr-2 flex items-center text-sm">
                            Menu Manager
                        </span>
                    </a>
                </li>
                <li class="relative">
                    <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                            <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                        </svg>
                    </span>
                        <a href="javascript:;"
                        title="logs" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                        <span class="pr-2 flex items-center text-sm">
                        logs
                        </span>
                    </a>
                </li>
                <li class="relative">
                    <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                            <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                        </svg>
                    </span>
                    <a href="notice_list.html"
                    title="Notice Management" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                    <span class="pr-2 flex items-center text-sm">
                        Notice Management
                    </span>
                </a>
            </li>
            </ul>
          </div>
        </li>
        <li class="relative">
            <a href="javascript:;"
               title="Admin Section" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-4 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                <span class="flex items-center font-medium">
                <span>
                    <span class="p-1.5 text-xs w-7 h-7 flex items-center justify-center rounded-md border-[1.5px] border-white">
                    <svg viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.04808 8.6651C4.51128 7.99366 3.97072 7.3229 3.62262 6.54967C3.5715 6.43641 3.5294 6.40877 3.38204 6.4236C2.21296 6.54495 1.0108 7.51772 0.792768 8.53229C0.765703 8.65768 0.773973 8.71633 0.942381 8.71566C2.27987 8.71094 3.61736 8.71228 4.95485 8.70891C4.98342 8.70891 5.01124 8.67386 5.03981 8.65498L5.04883 8.6651H5.04808Z" fill="white"/>
                    <path d="M5.97555 8.64835C6.04773 8.77172 6.17629 8.71105 6.27628 8.71172C7.50025 8.71644 8.72421 8.7097 9.94818 8.71981C10.2053 8.72183 10.273 8.68476 10.1827 8.44342C9.7715 7.34053 8.95201 6.66168 7.67317 6.4372C7.54836 6.41562 7.45514 6.37989 7.38597 6.54034C7.04991 7.31761 6.50183 7.98298 5.96804 8.65577L5.97631 8.64768L5.97555 8.64835Z" fill="white"/>
                    <path d="M5.50293 14.7208C4.17597 14.7208 2.849 14.7208 1.52204 14.7208C1.43483 14.7208 1.34686 14.7208 1.25965 14.7268C1.15665 14.7329 1.09576 14.7909 1.10102 14.8785C1.10628 14.9648 1.17094 15.0181 1.27469 15.0194C1.3619 15.0208 1.44986 15.0235 1.53708 15.0235C4.17822 15.0235 6.81937 15.0235 9.46052 15.0235C9.5357 15.0235 9.61088 15.0214 9.68607 15.0221C9.79884 15.0235 9.89206 14.9898 9.89808 14.8799C9.9056 14.7444 9.79358 14.7201 9.67103 14.7194C9.33271 14.7194 8.99514 14.7188 8.65682 14.7188C7.60502 14.7188 6.55398 14.7188 5.50218 14.7188L5.50293 14.7208Z" fill="white"/>
                    <path d="M5.96535 8.65548C5.80597 8.09797 5.74357 7.55327 6.25781 7.07194C5.74883 7.15553 5.2842 7.18519 4.76394 7.0625C5.24736 7.55731 5.19624 8.10606 5.04663 8.66491C5.04663 8.66491 5.03761 8.65548 5.03761 8.6548C5.34961 8.74986 5.66162 8.75457 5.97287 8.64739L5.96535 8.65548Z" fill="white"/>
                    <path d="M1.00239 9.00676C2.50378 9.00474 4.00441 9.00676 5.5058 9.00676C6.9696 9.00676 8.43339 9.00676 9.89644 9.00676C10.8219 9.00676 11.1227 9.35259 10.9565 10.1717C10.7061 11.404 10.4746 12.639 10.243 13.874C10.1611 14.3122 9.85809 14.5906 9.36565 14.592C6.78841 14.5987 4.21192 14.598 1.63467 14.592C1.19787 14.5913 0.843759 14.3257 0.77459 13.9691C0.518971 12.6471 0.263351 11.3244 0.0220175 10.0004C-0.0952673 9.35663 0.259592 9.00743 1.00164 9.00676H1.00239ZM5.53211 12.0458C5.7539 12.0316 5.87419 11.9035 5.86818 11.7174C5.86141 11.5098 5.70203 11.3891 5.47648 11.402C5.26973 11.4141 5.15094 11.5435 5.13064 11.7404C5.17725 11.9305 5.28928 12.0606 5.53211 12.0451V12.0458Z" fill="white"/>
                    <path d="M2.68775 3.2868C2.95991 3.11759 2.96818 2.9376 2.96818 2.703C2.96894 1.39451 4.04103 0.439264 5.50333 0.425781C5.70181 0.446005 5.9048 0.447354 6.09726 0.488476C7.328 0.754084 8.04598 1.58462 8.05726 2.7212C8.05877 2.86614 7.94599 3.07378 8.13169 3.154C8.66022 3.38253 8.59707 3.79442 8.58955 4.19756C8.58203 4.60406 8.34671 4.86158 7.90088 4.89124C7.70015 4.90472 7.62572 4.97079 7.56256 5.12651C7.39416 5.54178 7.13778 5.91255 6.77541 6.21658C6.00554 6.8624 4.98532 6.85701 4.21696 6.20849C3.93954 5.97457 3.72828 5.69683 3.56287 5.39414C3.42529 5.14067 3.22531 4.96742 2.9321 4.86427C2.32011 4.6499 2.14043 3.62589 2.687 3.28748L2.68775 3.2868ZM5.52588 0.870709C4.65828 0.861945 3.83428 1.37563 3.64558 2.07876C5.20636 1.00688 6.0499 1.03789 7.431 2.18797C7.25958 1.43833 6.45212 0.880147 5.52588 0.870709ZM4.04479 5.13056C4.40943 5.25729 4.76955 5.40762 5.1838 5.22359C5.35296 5.14808 5.577 5.17977 5.77473 5.22089C5.92886 5.25325 6.00705 5.35841 6.01832 5.48785C6.03035 5.622 5.94615 5.75076 5.80405 5.76559C5.53941 5.79323 5.27928 5.82357 5.00487 5.71301C4.69512 5.58829 4.34702 5.5411 3.9651 5.4474C4.7515 6.62106 6.10779 6.67297 6.95735 5.58964C7.25657 5.20876 7.43551 4.78136 7.50768 4.32429C7.51595 4.27373 7.7212 3.98588 7.33251 4.07958C7.17913 4.11666 7.27311 3.97105 7.27913 3.91375C7.31221 3.61106 7.32424 3.30972 7.22951 3.01378C7.15808 2.78929 7.05057 2.67267 6.74458 2.78862C5.92735 3.09872 5.08832 3.09939 4.27109 2.79266C3.94179 2.6693 3.8433 2.79873 3.76963 3.0367C3.67715 3.33467 3.69369 3.63533 3.73203 3.93734C3.74256 4.01756 3.81173 4.14497 3.61249 4.06408C3.51777 4.02565 3.51777 4.0843 3.50122 4.13891C3.39522 4.49552 3.65685 4.99708 4.04404 5.13123L4.04479 5.13056Z" fill="white"/>
                    </svg>                    
                    </span>
                </span>
                <span class="menu-title px-3">Admin Section</span>
                </span>
                <svg class="duration-300 menu-arrow ml-auto" width="7" height="11" viewBox="0 0 7 11" fill="none">
                    <path d="M6.66323 4.98326C6.73019 5.05022 6.76367 5.12723 6.76367 5.21429C6.76367 5.30134 6.73019 5.37835 6.66323 5.44531L1.98242 10.1261C1.91546 10.1931 1.83845 10.2266 1.7514 10.2266C1.66434 10.2266 1.58733 10.1931 1.52037 10.1261L1.01814 9.62388C0.951172 9.55692 0.91769 9.47991 0.91769 9.39286C0.91769 9.3058 0.951172 9.22879 1.01814 9.16183L4.96568 5.21429L1.01814 1.26674C0.951172 1.19978 0.91769 1.12277 0.91769 1.03571C0.91769 0.94866 0.951172 0.871651 1.01814 0.804688L1.52037 0.302455C1.58733 0.23549 1.66434 0.202008 1.7514 0.202008C1.83845 0.202008 1.91546 0.23549 1.98242 0.302455L6.66323 4.98326Z" fill="#E5E5E5" fill-opacity="0.8"/>
                    </svg>
            </a>
            <div class="drop-down-item overflow-hidden ml-6" data-collapse="false" style="height: 0px;">
              <ul class="bg-lara-secondary space-y-3">
                  <li class="relative">
                      <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                          <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                              <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                          </svg>
                      </span>
                      <a href="javascript:;"
                      title="media" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                       <span class="pr-2 flex items-center text-sm">
                       media
                       </span>
                      </a>
                  </li>
                  <li class="relative">
                      <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                          <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                              <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                          </svg>
                      </span>
                      <a href="javascript:;"
                      title="pages" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                       <span class="pr-2 flex items-center text-sm">
                          pages
                       </span>
                   </a>
                </li>
                  <li class="relative">
                          <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                              <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                                  <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                              </svg>
                          </span>
                          <a href="user_management_list.html"
                          title=" user management" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                          <span class="pr-2 flex items-center text-sm">
                              user management
                          </span>
                      </a>
                  </li>
                  <li class="relative">
                      <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                          <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                              <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                          </svg>
                      </span>
                          <a href="javascript:;"
                          title="ticket management" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                          <span class="pr-2 flex items-center text-sm">
                              ticket management
                          </span>
                      </a>
                  </li>
              </ul>
            </div>
          </li>
          <li class="relative">
            <a href="javascript:;"
               title="User section" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-4 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                <span class="flex items-center font-medium">
                <span>
                    <span class="p-1.5 text-xs w-7 h-7 flex items-center justify-center rounded-md border-[1.5px] border-white">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                  </svg>
                    </span>
                </span>
                <span class="menu-title px-3">User section</span>
                </span>
                <svg class="duration-300 menu-arrow ml-auto" width="7" height="11" viewBox="0 0 7 11" fill="none">
                    <path d="M6.66323 4.98326C6.73019 5.05022 6.76367 5.12723 6.76367 5.21429C6.76367 5.30134 6.73019 5.37835 6.66323 5.44531L1.98242 10.1261C1.91546 10.1931 1.83845 10.2266 1.7514 10.2266C1.66434 10.2266 1.58733 10.1931 1.52037 10.1261L1.01814 9.62388C0.951172 9.55692 0.91769 9.47991 0.91769 9.39286C0.91769 9.3058 0.951172 9.22879 1.01814 9.16183L4.96568 5.21429L1.01814 1.26674C0.951172 1.19978 0.91769 1.12277 0.91769 1.03571C0.91769 0.94866 0.951172 0.871651 1.01814 0.804688L1.52037 0.302455C1.58733 0.23549 1.66434 0.202008 1.7514 0.202008C1.83845 0.202008 1.91546 0.23549 1.98242 0.302455L6.66323 4.98326Z" fill="#E5E5E5" fill-opacity="0.8"/>
                    </svg>
            </a>
            <div class="drop-down-item overflow-hidden ml-6" data-collapse="false" style="height: 0px;">
              <ul class="bg-lara-secondary space-y-3">
                  <li class="relative">
                      <span class="curve-svg absolute top-2 -left-0.5 w-10p h-15p">
                          <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                              <path opacity="0.8" d="M1 0V5.5C1 11.0228 5.47715 15.5 11 15.5V15.5" stroke="#3e607f" stroke-width="2"/>
                          </svg>
                      </span>
                      <a href="javascript:;"
                      title="support" class="mt-3 drop-down-header capitalize hover:bg-white hover:bg-opacity-10 pl-3 ml-3.5 text-white opacity-80 hover:opacity-100 py-3 pr-18p flex items-center font-light duration-200">
                       <span class="pr-2 flex items-center text-sm">
                       support
                       </span>
                      </a>
                  </li>
                </ul>
            </div>
          </li>
      </ul>
</div>
`

collapseSidebar.innerHTML = reserveHtml




let reserveHeader = document.querySelector('.reserveHeader')

let reserveHtmlHeader = `<div class="top-header w-full bg-white h-[80px] 2xl:h-[100px] shadow-lara-shadow3 px-6 flex items-center border-b-2 border-white border-opacity-20">
                            <div class="w-2/12">
                                <div class="flex items-center">
                                    <div id="sidebar-collapse-button" class="mr-7 text-lara-primary text-3xl cursor-pointer">
                                        <i class="fa fa-bars pointer-events-none" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="w-10/12">
                                <div class="flex items-center justify-end">
                                    <div>
                                        <div class="flex items-center justify-end md:justify-between">
                                            <!--notification start-->
                                            <div class="hidden sm:block ml-7 md:ml-12 relative items-center">
                                                <div class="hover-dropdown-box h-11 w-11 2xl:h-50p 2xl:w-50p group rounded-full flex items-center justify-center bg-lara-gray6 bg-opacity-80 cursor-pointer">
                                                    <div class="relative pointer-events-none">
                                                        <span class="pointer-events-none flex w-5 h-5 2xl:h-6 2xl:w-6 items-center justify-center absolute -top-4 -right-3">
                                                            <span class="absolute inline-flex h-full w-full rounded-full bg-lara-danger opacity-75"></span>
                                                            <span class="flex relative rounded-full w-5 h-5 2xl:h-6 2xl:w-6 font-semibold text-f10 2xl:text-xs text-white bg-lara-danger items-center justify-center">9+</span>
                                                        </span>
                                                        <span class="text-xl 2xl:text-2xl text-lara-gray8 group-hover:text-lara-gray9"><i class="fa fa-bell-o" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                                <div class="hover-dropdown-show-box hidden z-10 absolute w-60 transition-all duration-500 left-0 top-full mt-6">
                                                    <div class="w-4 overflow-hidden inline-block absolute z-40 top-1 left-5">
                                                        <div class="h-3 w-3 bg-white rotate-45 transform origin-bottom-left"></div>
                                                    </div>
                                                    <div class="bg-white mt-4 shadow-lara-shadow3 relative overflow-hidden">
                                                        <div class="p-4 font-medium text-sm text-text-80 text-center">
                                                            You have 4 notifications
                                                        </div>
                                                        <ul class="h-52 w-full overflow-y-auto text-TextColor customScroll">
                                                            <li class="">
                                                                <a class="p-3 border-t text-text-50 border-lara-gray-light text-sm flex items-center space-x-3 hover:bg-gray-100" href="javascript:;">
                                                                    <div>
                                                                        <p class="text-text-50 truncate whitespace-pre-wrap">rerum sed et ut reprehendeit reic</p>
                                                                    </div>
                                                                    <div class="text-lg">
                                                                        <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
                                                                    </div>
                                                                </a>
                                                                <a class="p-3 text-text-50 border-t border-lara-gray-light text-sm flex items-center space-x-3 hover:bg-gray-100" href="javascript:;">
                                                                    <div>
                                                                        <p class=" truncate whitespace-pre-wrap">rerum sed et ut reprehendeit reic</p>
                                                                    </div>
                                                                    <div class="text-lg">
                                                                        <i class="text-lara-primary fa fa-envelope-o" aria-hidden="true"></i>
                                                                    </div>
                                                                </a>
                                                                <a class="p-3 text-text-50 border-t border-lara-gray-light text-sm flex items-center space-x-3 hover:bg-gray-100" href="javascript:;">
                                                                    <div>
                                                                        <p class=" truncate whitespace-pre-wrap">rerum sed et ut reprehendeit reic</p>
                                                                    </div>
                                                                    <div class="text-lg">
                                                                        <i class="text-lara-primary fa fa-envelope-o" aria-hidden="true"></i>
                                                                    </div>
                                                                </a>
                                                                <a class="p-3 text-text-50 border-t border-lara-gray-light text-sm flex items-center space-x-3 hover:bg-gray-100" href="javascript:;">
                                                                    <div>
                                                                        <p class=" truncate whitespace-pre-wrap">rerum sed et ut reprehendeit reic</p>
                                                                    </div>
                                                                    <div class="text-lg">
                                                                        <i class="text-lara-primary fa fa-envelope-o" aria-hidden="true"></i>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div class="p-4">
                                                            <a  class="block px-3 py-2 bg-lara-primary hover:bg-lara-danger hover: border-t border-lara-gray-light text-lara-gray-light text-center" href="javascript:;">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--notification end-->

                                            <!-- lang start -->
                                            <div class="relative hidden sm:block ml-7 md:ml-12 pr-12 border-r border-lara-gray6">
                                                <div class="hover-dropdown-box  cursor-pointer flex items-center space-x-4">
                                                    <div class="pointer-events-none h-11 w-11 2xl:h-50p 2xl:w-50p rounded-full bg-opacity-80 bg-lara-gray6 flex items-center justify-center">
                                                        <div class="w-6 2xl:w-7 country-flag">
                                                            <img alt="" class="w-full" src="./src/assets/image/um.svg">
                                                        </div>
                                                    </div>
                                                    <div class="langName pointer-events-none font-medium text-base text-text-80 w-[70px] overflow-hidden text-ellipsis">English</div>
                                                </div>
                                                <div class="mr-4 hover-dropdown-show-box hidden z-10 absolute w-[150px] transition-all duration-500 rounded left-0 top-full mt-6">
                                                    <div class="w-4 overflow-hidden inline-block absolute top-1 left-5 z-30">
                                                        <div class="h-3 w-3 duration-300 bg-white shadow-lara-shadow3 rotate-45 transform origin-bottom-left"></div>
                                                    </div>
                                                    <div class="shadow-lara-shadow3 cursor-pointer mt-4 relative ">
                                                        <ul class="text-lara-gray8 langParent">
                                                            <li class="px-4 py-3.5 text-xs bg-white hover:bg-lara-primary duration-300 text-text-50 hover:text-white language">
                                                                <div class="flex items-center space-x-3 pointer-events-none">
                                                                    <div class="w-6 "><img alt="" class="w-full" src="./src/assets/image/um.svg"></div>
                                                                    <div class="text-sm font-medium">English</div>
                                                                </div>
                                                            </li>
                                                            <li class="px-4 py-3.5 text-xs bg-white hover:bg-lara-primary duration-300 text-text-50 hover:text-white language">
                                                                <div class="flex items-center space-x-3 pointer-events-none">
                                                                    <div class="w-6"><img alt="" class="w-full" src="./src/assets/image/it.svg"></div>
                                                                    <div class="text-sm font-medium">Italiana</div>
                                                                </div>
                                                            </li>
                                                            <li class="px-4 py-3.5 text-xs bg-white hover:bg-lara-primary duration-300 text-text-50 hover:text-white language">
                                                                <div class="flex items-center space-x-3 pointer-events-none">
                                                                    <div class="w-6 "><img alt="" class="w-full" src="./src/assets/image/fr.svg"></div>
                                                                    <div class="text-sm font-medium">Francais</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- lang end -->

                                            <!--start profile-->
                                            <div class="ml-7 md:ml-12 inline-block relative">
                                                <div class="hover-dropdown-box flex items-center cursor-pointer">
                                                    <div class="pointer-events-none flex items-center">
                                                        <div class="mr-4 w-11 h-11 2xl:w-50p 2xl:h-50p rounded-full overflow-hidden">
                                                            <img alt="Profile Image" class="w-full h-full object-cover object-center" src="./src/assets/image/larauser.svg">
                                                        </div>
                                                        <div>
                                                            <h3 class="text-md font-semibold uppercase text-text-80">Austin</h3>
                                                            <p class="text-xs text-text-50">Chief Manager</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hover-dropdown-show-box hidden z-10 absolute w-40 transition-all duration-500 top-full mt-6 right-0">
                                                    
                                                    <div class="bg-white mt-4 shadow-lara-shadow3">
                                                        <ul class="">
                                                            <li>
                                                                <a class="duration-300 group hover:bg-lara-primary text-center px-4 py-3.5 text-lara-gray8 hover:text-white block" href="profile.html">
                                                                Profile
                                                                <span class="group-hover:bg-lara-primary duration-300 w-3 h-3 bg-white inline-block rotate-45 absolute top-2.5 right-5">
                                                                </span>
                                                                </a>
                                                            </li>
                                                            <li><a class="duration-300 hover:bg-lara-primary text-center px-4 py-3.5 text-lara-gray8 hover:text-white block" href="edit_profile.html">
                                                                Edit Profile
                                                            </a>
                                                            </li>
                                                            <li><a class="duration-300 hover:bg-lara-primary text-center px-4 py-3.5 text-lara-gray8 hover:text-white block" href="javascript:;">
                                                                Setting
                                                            </a>
                                                            </li>
                                                            <li><a class="duration-300 hover:bg-lara-primary text-center px-4 py-3.5 text-lara-gray8 hover:text-white block" href="javascript:;">
                                                                Logout
                                                            </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--end profile-->
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>`

 reserveHeader.innerHTML = reserveHtmlHeader