import React from 'react'

type StyleType = {
    style: String,
}

const NixonLim = ({ style } : StyleType) => {
  return (
    <div className={`${style}`}>
        <svg width="764" height="99" viewBox="0 0 764 117" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M92.0986 5.34242L93.0986 5.33811L93.0943 4.33812L92.0943 4.34243L92.0986 5.34242ZM92.5684 114.432L92.5727 115.432L93.5727 115.428L93.5684 114.428L92.5684 114.432ZM72.6467 114.518L71.8265 115.09L72.1266 115.52L72.651 115.518L72.6467 114.518ZM24.8905 46.0619L25.7107 45.4897L25.4106 45.0596L24.8862 45.0619L24.8905 46.0619ZM24.0915 46.0653L24.0872 45.0653L23.0872 45.0696L23.0915 46.0696L24.0915 46.0653ZM24.3872 114.726L24.3915 115.726L25.3915 115.722L25.3872 114.722L24.3872 114.726ZM1.32276 114.825L0.322774 114.83L0.32708 115.83L1.32707 115.825L1.32276 114.825ZM0.853022 5.73532L0.848716 4.73533L-0.151274 4.73964L-0.146968 5.73963L0.853022 5.73532ZM21.0943 5.64816L21.9164 5.07874L21.6165 4.6459L21.09 4.64817L21.0943 5.64816ZM68.4774 74.0527L67.6553 74.6221L67.9551 75.055L68.4817 75.0527L68.4774 74.0527ZM69.4362 74.0486L69.4405 75.0486L70.4405 75.0443L70.4362 74.0443L69.4362 74.0486ZM69.1407 5.44127L69.1364 4.44128L68.1365 4.44559L68.1408 5.44558L69.1407 5.44127ZM91.0986 5.34672L91.5684 114.437L93.5684 114.428L93.0986 5.33811L91.0986 5.34672ZM92.5641 113.432L72.6424 113.518L72.651 115.518L92.5727 115.432L92.5641 113.432ZM73.4668 113.946L25.7107 45.4897L24.0704 46.634L71.8265 115.09L73.4668 113.946ZM24.8862 45.0619L24.0872 45.0653L24.0958 47.0653L24.8948 47.0619L24.8862 45.0619ZM23.0915 46.0696L23.3872 114.73L25.3872 114.722L25.0915 46.061L23.0915 46.0696ZM24.3829 113.726L1.31846 113.825L1.32707 115.825L24.3915 115.726L24.3829 113.726ZM2.32276 114.821L1.85301 5.73101L-0.146968 5.73963L0.322774 114.83L2.32276 114.821ZM0.857328 6.73531L21.0986 6.64815L21.09 4.64817L0.848716 4.73533L0.857328 6.73531ZM20.2723 6.21758L67.6553 74.6221L69.2994 73.4833L21.9164 5.07874L20.2723 6.21758ZM68.4817 75.0527L69.4405 75.0486L69.4319 73.0486L68.4731 73.0527L68.4817 75.0527ZM70.4362 74.0443L70.1407 5.43697L68.1408 5.44558L68.4362 74.0529L70.4362 74.0443ZM69.1451 6.44126L92.1029 6.34241L92.0943 4.34243L69.1364 4.44128L69.1451 6.44126ZM134.219 5.16104L135.219 5.15674L135.215 4.15675L134.215 4.16105L134.219 5.16104ZM134.689 114.251L134.693 115.251L135.693 115.247L135.689 114.247L134.689 114.251ZM111.624 114.35L110.624 114.355L110.629 115.355L111.629 115.35L111.624 114.35ZM111.155 5.26036L111.15 4.26037L110.15 4.26468L110.155 5.26467L111.155 5.26036ZM133.219 5.16535L133.689 114.255L135.689 114.247L135.219 5.15674L133.219 5.16535ZM134.685 113.251L111.62 113.35L111.629 115.35L134.693 115.251L134.685 113.251ZM112.624 114.346L112.155 5.25605L110.155 5.26467L110.624 114.355L112.624 114.346ZM111.159 6.26035L134.223 6.16104L134.215 4.16105L111.15 4.26037L111.159 6.26035ZM174.822 4.98621L175.68 4.47328L175.388 3.98376L174.817 3.98622L174.822 4.98621ZM196.981 42.0715L196.122 42.5845L196.415 43.074L196.985 43.0715L196.981 42.0715ZM197.833 42.0679L197.837 43.0679L198.406 43.0654L198.695 42.5752L197.833 42.0679ZM219.779 4.79262L219.774 3.79263L219.205 3.79508L218.917 4.28528L219.779 4.79262ZM245.826 4.68046L246.682 5.19776L247.603 3.6728L245.822 3.68047L245.826 4.68046ZM212.769 59.3688L211.913 58.8515L211.594 59.3796L211.923 59.9018L212.769 59.3688ZM247.041 113.767L247.046 114.767L248.848 114.759L247.887 113.234L247.041 113.767ZM220.515 113.881L219.66 114.4L219.953 114.884L220.519 114.881L220.515 113.881ZM197.982 76.7444L198.837 76.2257L198.544 75.742L197.978 75.7444L197.982 76.7444ZM197.13 76.7481L197.126 75.7481L196.56 75.7505L196.271 76.2367L197.13 76.7481ZM174.918 114.078L174.923 115.078L175.489 115.075L175.778 114.589L174.918 114.078ZM148.498 114.191L147.648 113.665L146.697 115.199L148.503 115.191L148.498 114.191ZM182.407 59.4995L183.257 60.0264L183.584 59.4994L183.257 58.9724L182.407 59.4995ZM148.668 5.09883L148.663 4.09884L146.876 4.10654L147.818 5.62589L148.668 5.09883ZM173.963 5.49914L196.122 42.5845L197.839 41.5586L175.68 4.47328L173.963 5.49914ZM196.985 43.0715L197.837 43.0679L197.829 41.0679L196.976 41.0715L196.985 43.0715ZM198.695 42.5752L220.64 5.29997L218.917 4.28528L196.971 41.5605L198.695 42.5752ZM219.783 5.79262L245.83 5.68046L245.822 3.68047L219.774 3.79263L219.783 5.79262ZM244.97 4.16317L211.913 58.8515L213.625 59.8861L246.682 5.19776L244.97 4.16317ZM211.923 59.9018L246.195 114.3L247.887 113.234L213.615 58.8357L211.923 59.9018ZM247.037 112.767L220.51 112.881L220.519 114.881L247.046 114.767L247.037 112.767ZM221.37 113.363L198.837 76.2257L197.127 77.2631L219.66 114.4L221.37 113.363ZM197.978 75.7444L197.126 75.7481L197.134 77.7481L197.987 77.7444L197.978 75.7444ZM196.271 76.2367L174.059 113.566L175.778 114.589L197.989 77.2594L196.271 76.2367ZM174.914 113.078L148.494 113.191L148.503 115.191L174.923 115.078L174.914 113.078ZM149.348 114.718L183.257 60.0264L181.557 58.9726L147.648 113.665L149.348 114.718ZM183.257 58.9724L149.518 4.57176L147.818 5.62589L181.557 60.0266L183.257 58.9724ZM148.672 6.09882L174.826 5.9862L174.817 3.98622L148.663 4.09884L148.672 6.09882ZM349.142 89.144L348.261 88.6724L348.259 88.6753L349.142 89.144ZM330.901 108.346L331.398 109.213L331.399 109.213L330.901 108.346ZM278.806 108.517L279.299 107.646L278.806 108.517ZM260.453 89.4727L259.574 89.949L259.574 89.949L260.453 89.4727ZM260.192 28.8021L261.075 29.2708L261.075 29.2708L260.192 28.8021ZM278.38 9.65397L278.877 10.5218L278.88 10.5201L278.38 9.65397ZM330.475 9.42965L329.983 10.3L329.988 10.3027L330.475 9.42965ZM348.881 28.4202L348.002 28.8965L348.003 28.8994L348.881 28.4202ZM328.846 39.373L327.929 39.7716L327.931 39.7768L328.846 39.373ZM319.153 27.3763L318.607 28.214L318.607 28.214L319.153 27.3763ZM289.963 27.502L290.516 28.3349L290.516 28.3349L289.963 27.502ZM280.32 39.582L279.402 39.1861L279.4 39.1913L280.32 39.582ZM280.488 78.5731L279.571 78.9717L279.573 78.9769L280.488 78.5731ZM290.235 90.5696L290.781 89.7319L290.781 89.7319L290.235 90.5696ZM319.425 90.4439L318.871 89.6109L318.871 89.6109L319.425 90.4439ZM329.014 78.3641L328.096 77.9682L328.094 77.9734L329.014 78.3641ZM354.777 58.7573C354.827 70.5289 352.639 80.4869 348.261 88.6724L350.024 89.6157C354.594 81.0722 356.828 70.7695 356.777 58.7487L354.777 58.7573ZM348.259 88.6753C343.903 96.8842 337.952 103.142 330.403 107.479L331.399 109.213C339.296 104.676 345.505 98.1326 350.026 89.6128L348.259 88.6753ZM330.404 107.478C322.88 111.786 314.397 113.969 304.931 114.009L304.94 116.009C314.72 115.967 323.548 113.708 331.398 109.213L330.404 107.478ZM304.931 114.009C295.394 114.05 286.858 111.923 279.299 107.646L278.314 109.387C286.204 113.851 295.088 116.052 304.94 116.009L304.931 114.009ZM279.299 107.646C271.748 103.375 265.76 97.1686 261.333 88.9964L259.574 89.949C264.168 98.4284 270.414 104.918 278.314 109.387L279.299 107.646ZM261.333 88.9964C256.918 80.8476 254.662 70.9253 254.611 59.1886L252.611 59.1972C252.663 71.1819 254.968 81.4461 259.574 89.949L261.333 88.9964ZM254.611 59.1886C254.561 47.4158 256.732 37.4568 261.075 29.2708L259.309 28.3333C254.776 36.876 252.56 47.1776 252.611 59.1972L254.611 59.1886ZM261.075 29.2708C265.432 21.0613 271.366 14.8224 278.877 10.5218L277.884 8.78614C270.021 13.2876 263.829 19.8141 259.309 28.3333L261.075 29.2708ZM278.88 10.5201C286.403 6.17841 294.92 3.97758 304.457 3.93652L304.448 1.93653C294.596 1.97896 285.732 4.25643 277.881 8.78787L278.88 10.5201ZM304.457 3.93652C313.922 3.89576 322.422 6.02267 329.983 10.3L330.968 8.55928C323.079 4.09625 314.231 1.89441 304.448 1.93653L304.457 3.93652ZM329.988 10.3027C337.571 14.5387 343.576 20.726 348.002 28.8965L349.76 27.9439C345.166 19.4627 338.899 12.9897 330.963 8.55661L329.988 10.3027ZM348.003 28.8994C352.452 37.0469 354.726 46.9857 354.777 58.7573L356.777 58.7487C356.725 46.7279 354.402 36.4448 349.759 27.941L348.003 28.8994ZM333.393 58.8494C333.359 51.0495 332.163 44.4109 329.761 38.9692L327.931 39.7768C330.192 44.8975 331.36 51.246 331.393 58.858L333.393 58.8494ZM329.763 38.9744C327.402 33.5426 324.055 29.378 319.699 26.5386L318.607 28.214C322.585 30.8075 325.699 34.6408 327.929 39.7716L329.763 38.9744ZM319.699 26.5386C315.35 23.7028 310.282 22.3129 304.536 22.3376L304.545 24.3376C309.949 24.3143 314.623 25.6169 318.607 28.214L319.699 26.5386ZM304.536 22.3376C298.79 22.3624 293.735 23.7959 289.41 26.669L290.516 28.3349C294.477 25.7036 299.141 24.3609 304.545 24.3376L304.536 22.3376ZM289.41 26.669C285.081 29.5449 281.752 33.7363 279.402 39.1861L281.239 39.9779C283.46 34.8255 286.559 30.9636 290.516 28.3349L289.41 26.669ZM279.4 39.1913C277.082 44.6517 275.962 51.2983 275.995 59.0965L277.995 59.0879C277.963 51.4743 279.059 45.1141 281.241 39.9727L279.4 39.1913ZM275.995 59.0965C276.029 66.8947 277.207 73.5315 279.571 78.9717L281.405 78.1745C279.179 73.052 278.028 66.7015 277.995 59.0879L275.995 59.0965ZM279.573 78.9769C281.97 84.4063 285.335 88.5688 289.689 91.4073L290.781 89.7319C286.801 87.1374 283.669 83.3023 281.403 78.1693L279.573 78.9769ZM289.689 91.4073C294.038 94.2431 299.105 95.633 304.852 95.6083L304.843 93.6083C299.439 93.6315 294.764 92.329 290.781 89.7319L289.689 91.4073ZM304.852 95.6083C310.598 95.5835 315.653 94.15 319.978 91.2769L318.871 89.6109C314.91 92.2423 310.247 93.585 304.843 93.6083L304.852 95.6083ZM319.978 91.2769C324.309 88.4 327.621 84.2068 329.935 78.7548L328.094 77.9734C325.908 83.1233 322.827 86.9833 318.871 89.6109L319.978 91.2769ZM329.932 78.76C332.287 73.2979 333.426 66.6492 333.393 58.8494L331.393 58.858C331.425 66.4699 330.312 72.8282 328.096 77.9682L329.932 78.76ZM463.873 3.74155L464.873 3.73725L464.868 2.73726L463.868 2.74156L463.873 3.74155ZM464.342 112.831L464.347 113.831L465.347 113.827L465.342 112.827L464.342 112.831ZM444.421 112.917L443.6 113.489L443.9 113.919L444.425 113.917L444.421 112.917ZM396.664 44.461L397.485 43.8889L397.185 43.4588L396.66 43.461L396.664 44.461ZM395.865 44.4645L395.861 43.4645L394.861 43.4688L394.865 44.4688L395.865 44.4645ZM396.161 113.125L396.165 114.125L397.165 114.121L397.161 113.121L396.161 113.125ZM373.097 113.224L372.097 113.229L372.101 114.229L373.101 114.224L373.097 113.224ZM372.627 4.13446L372.623 3.13447L371.623 3.13877L371.627 4.13876L372.627 4.13446ZM392.868 4.0473L393.69 3.47788L393.39 3.04504L392.864 3.04731L392.868 4.0473ZM440.251 72.4519L439.429 73.0213L439.729 73.4541L440.256 73.4519L440.251 72.4519ZM441.21 72.4477L441.214 73.4477L442.214 73.4434L442.21 72.4434L441.21 72.4477ZM440.915 3.84041L440.91 2.84042L439.91 2.84473L439.915 3.84472L440.915 3.84041ZM462.873 3.74586L463.342 112.836L465.342 112.827L464.873 3.73725L462.873 3.74586ZM464.338 111.831L444.416 111.917L444.425 113.917L464.347 113.831L464.338 111.831ZM445.241 112.345L397.485 43.8889L395.844 45.0332L443.6 113.489L445.241 112.345ZM396.66 43.461L395.861 43.4645L395.87 45.4644L396.669 45.461L396.66 43.461ZM394.865 44.4688L395.161 113.129L397.161 113.121L396.865 44.4602L394.865 44.4688ZM396.157 112.125L373.092 112.224L373.101 114.224L396.165 114.125L396.157 112.125ZM374.097 113.22L373.627 4.13015L371.627 4.13876L372.097 113.229L374.097 113.22ZM372.631 5.13445L392.873 5.04729L392.864 3.04731L372.623 3.13447L372.631 5.13445ZM392.046 4.61672L439.429 73.0213L441.073 71.8824L393.69 3.47788L392.046 4.61672ZM440.256 73.4519L441.214 73.4477L441.206 71.4477L440.247 71.4519L440.256 73.4519ZM442.21 72.4434L441.915 3.8361L439.915 3.84472L440.21 72.452L442.21 72.4434ZM440.919 4.8404L463.877 4.74154L463.868 2.74156L440.91 2.84042L440.919 4.8404ZM518.115 112.6L517.115 112.604L517.119 113.604L518.119 113.6L518.115 112.6ZM517.645 3.51001L517.641 2.51002L516.641 2.51432L516.645 3.51431L517.645 3.51001ZM540.71 3.41069L541.71 3.40639L541.705 2.4064L540.705 2.4107L540.71 3.41069ZM541.097 93.4844L540.097 93.4887L540.102 94.4887L541.102 94.4844L541.097 93.4844ZM587.865 93.2831L588.865 93.2787L588.861 92.2788L587.861 92.2831L587.865 93.2831ZM587.947 112.299L587.952 113.299L588.952 113.295L588.947 112.295L587.947 112.299ZM519.115 112.596L518.645 3.5057L516.645 3.51431L517.115 112.604L519.115 112.596ZM517.649 4.51L540.714 4.41068L540.705 2.4107L517.641 2.51002L517.649 4.51ZM539.71 3.415L540.097 93.4887L542.097 93.4801L541.71 3.40639L539.71 3.415ZM541.102 94.4844L587.87 94.283L587.861 92.2831L541.093 92.4844L541.102 94.4844ZM586.865 93.2874L586.947 112.304L588.947 112.295L588.865 93.2787L586.865 93.2874ZM587.943 111.299L518.111 111.6L518.119 113.6L587.952 113.299L587.943 111.299ZM625.816 3.04422L626.816 3.03992L626.812 2.03993L625.812 2.04423L625.816 3.04422ZM626.286 112.134L626.29 113.134L627.29 113.13L627.286 112.13L626.286 112.134ZM603.222 112.233L602.222 112.238L602.226 113.238L603.226 113.233L603.222 112.233ZM602.752 3.14354L602.747 2.14355L601.747 2.14785L601.752 3.14784L602.752 3.14354ZM624.816 3.04853L625.286 112.138L627.286 112.13L626.816 3.03992L624.816 3.04853ZM626.282 111.134L603.217 111.233L603.226 113.233L626.29 113.134L626.282 111.134ZM604.221 112.229L603.752 3.13923L601.752 3.14784L602.222 112.238L604.221 112.229ZM602.756 4.14353L625.82 4.04421L625.812 2.04423L602.747 2.14355L602.756 4.14353ZM644.792 2.96251L644.788 1.96252L643.788 1.96683L643.792 2.96682L644.792 2.96251ZM673.237 2.84003L674.16 2.45679L673.903 1.83715L673.232 1.84004L673.237 2.84003ZM703.595 76.0054L702.671 76.3887L702.928 77.0083L703.599 77.0054L703.595 76.0054ZM704.873 75.9999L704.877 76.9999L705.548 76.997L705.8 76.3752L704.873 75.9999ZM734.6 2.5758L734.595 1.57581L733.925 1.5787L733.673 2.20053L734.6 2.5758ZM763.044 2.45332L764.044 2.44901L764.04 1.44902L763.04 1.45333L763.044 2.45332ZM763.514 111.543L763.518 112.543L764.518 112.539L764.514 111.539L763.514 111.543ZM741.142 111.64L740.142 111.644L740.146 112.644L741.146 112.64L741.142 111.64ZM740.836 40.6352L741.836 40.6309L741.832 39.6309L740.832 39.6352L740.836 40.6352ZM739.931 40.6391L739.926 39.6391L739.25 39.6421L739.001 40.2713L739.931 40.6391ZM712.003 111.232L712.007 112.232L712.684 112.229L712.933 111.6L712.003 111.232ZM696.769 111.298L695.841 111.673L696.095 112.301L696.773 112.298L696.769 111.298ZM668.233 40.6815L669.16 40.3069L668.906 39.6786L668.228 39.6815L668.233 40.6815ZM667.327 40.6854L667.323 39.6854L666.323 39.6897L666.327 40.6897L667.327 40.6854ZM667.634 111.956L667.638 112.956L668.638 112.952L668.634 111.952L667.634 111.956ZM645.262 112.052L644.262 112.057L644.266 113.057L645.266 113.052L645.262 112.052ZM644.797 3.9625L673.241 3.84002L673.232 1.84004L644.788 1.96252L644.797 3.9625ZM672.313 3.22327L702.671 76.3887L704.518 75.6222L674.16 2.45679L672.313 3.22327ZM703.599 77.0054L704.877 76.9999L704.869 75L703.59 75.0055L703.599 77.0054ZM705.8 76.3752L735.527 2.95107L733.673 2.20053L703.946 75.6247L705.8 76.3752ZM734.604 3.57579L763.048 3.45331L763.04 1.45333L734.595 1.57581L734.604 3.57579ZM762.044 2.45762L762.514 111.548L764.514 111.539L764.044 2.44901L762.044 2.45762ZM763.51 110.543L741.138 110.64L741.146 112.64L763.518 112.543L763.51 110.543ZM742.142 111.635L741.836 40.6309L739.836 40.6395L740.142 111.644L742.142 111.635ZM740.832 39.6352L739.926 39.6391L739.935 41.6391L740.84 41.6352L740.832 39.6352ZM739.001 40.2713L711.073 110.864L712.933 111.6L740.861 41.007L739.001 40.2713ZM711.999 110.232L696.764 110.298L696.773 112.298L712.007 112.232L711.999 110.232ZM697.696 110.923L669.16 40.3069L667.306 41.0562L695.841 111.673L697.696 110.923ZM668.228 39.6815L667.323 39.6854L667.331 41.6854L668.237 41.6815L668.228 39.6815ZM666.327 40.6897L666.634 111.96L668.634 111.952L668.327 40.6811L666.327 40.6897ZM667.63 110.956L645.258 111.052L645.266 113.052L667.638 112.956L667.63 110.956ZM646.262 112.048L645.792 2.95821L643.792 2.96682L644.262 112.057L646.262 112.048Z" fill="#94A3B8" fill-opacity="0.1"/>
</svg>

    </div>
  )
}

export default NixonLim