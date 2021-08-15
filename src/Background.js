import { useState, useEffect, memo } from 'react';
import { useSprings, animated, config } from 'react-spring';

import './Background.css';

const Sun = () => {
    return <circle id="sun" cx="207" cy="172" r="100" fill="#FFE898"/>;
};

const SunGlow1 = () => {
    return <path id="sun_glow1" d="M82.1378 163.302C84.968 102.292 96.7356 95.0245 151.556 69.7332C224.247 36.1979 257.715 49.4595 303.135 116.072C354.058 190.756 337.919 237.222 256.563 275.138C203.862 299.699 184.476 297.393 133.982 268.454C78.0439 236.396 79.1184 228.39 82.1378 163.302Z" fill="#FFF4CC" fillOpacity="0.62"/>;
};

const SunGlow2 = () => {
    return <path id="sun_glow2" d="M77.9694 142.98C96.2408 94.783 119.682 61.9122 166.444 47.7725C250.006 22.5053 309.595 38.6932 332.158 128.448C350.881 202.925 349.586 254.872 285.346 289.8C218.447 326.173 174.198 331.7 124.781 271.259C87.5163 225.681 56.6929 199.104 77.9694 142.98Z" fill="#FFF9E6" fillOpacity="0.51"/>;
};

const Moon = () => {
    return (
        <>
            <circle id="Ellipse 1" cx="207" cy="178" r="100" fill="#F1EEE5" />
            <path id="Vector 1" d="M217 138.667C208.77 126.713 209.667 102.667 223.667 93.2268C243.731 79.6977 282.972 116.631 266.678 132.263C253.416 144.984 227.096 153.331 217 138.667Z" fill="#C4C4C4" fillOpacity="0.21" />
            <path id="Vector 4" d="M184.613 160.813C174.666 157.428 161.495 144.131 178.613 128.147C191.387 116.219 197.947 128.147 202.613 145.48C206.064 158.298 197.895 165.333 184.613 160.813Z" fill="#C4C4C4" fillOpacity="0.21" />
            <path id="Vector 2" d="M219.694 173.104C219.694 161.469 218.479 160.667 232.247 160.667C239.537 160.667 252.674 175.733 242.776 185.14C234.721 192.796 219.694 183.818 219.694 173.104Z" fill="#C4C4C4" fillOpacity="0.21" />
            <path id="Vector 5" d="M157.131 252.856C154.941 242.499 156.065 226.36 176.122 222.499C196.178 218.638 198.404 238.19 195.131 246.19C189.131 260.856 161.186 272.032 157.131 252.856Z" fill="#C4C4C4" fillOpacity="0.21" />
            <path id="Vector 3" d="M246.333 245.006C246.333 230.324 246.333 220.762 267 216.419C277.512 214.21 288.245 220.302 274.333 245.006C268.49 255.383 246.333 257.752 246.333 245.006V245.006Z" fill="#C4C4C4" fillOpacity="0.21" />
        </>
    );
};

const MoonGlow = () => {
    return <circle id="moon_glow" cx="207" cy="178" r="115" fill="#F0EFEC" fillOpacity="0.46"/>;
};

const Star1 = () => {
    return <path id="star1" d="M30 358.947C32.1052 358.158 33.9999 358.947 35 350C35.9999 358.947 37.6315 357.632 40 358.947C37.8947 359.737 35.9999 358.947 35 368.158C33.4999 358.947 32.3684 360 30 358.947Z" fill="#F1EEE5"/>;
};

const Star2 = () => {
    return <path id="star2" d="M300 410.421C303.158 409.237 306 410.421 307.5 397C309 410.421 311.447 408.447 315 410.421C311.842 411.605 309 410.421 307.5 424.237C305.25 410.421 303.553 412 300 410.421Z" fill="#F1EEE5"/>;
};

const Star3 = () => {
    return <path id="star3" d="M57 54.7368C59.5263 53.7895 61.7999 54.7368 63 44C64.1999 54.7368 66.1579 53.1579 69 54.7368C66.4736 55.6842 64.1999 54.7368 63 65.7895C61.1999 54.7368 59.8421 56 57 54.7368Z" fill="#F1EEE5"/>;
};

const Star4 = () => {
    return <path id="star4" d="M148 629.632C150.737 628.605 153.2 629.632 154.5 618C155.8 629.632 157.921 627.921 161 629.632C158.263 630.658 155.8 629.632 154.5 641.605C152.55 629.632 151.079 631 148 629.632Z" fill="#F1EEE5"/>;
};

const Star5 = () => {
    return <path id="star5" d="M360 113.947C362.105 113.158 364 113.947 365 105C366 113.947 367.632 112.632 370 113.947C367.895 114.737 366 113.947 365 123.158C363.5 113.947 362.368 115 360 113.947Z" fill="#F1EEE5"/>;
};

const clearDaySpringsArr = [
    {
        from: {transform: "translateY(800px) scale(1) rotate(0deg)"},
        to: [
            {transform: "translateY(0px) scale(1) rotate(0deg)"}, 
            {transform: "translateY(0px) scale(1.1) rotate(180deg)"}, 
            {transform: "translateY(0px) scale(1) rotate(0deg)"}
        ],
        delay: 200,
        config: config.slow
    },
    {
        from: {transform: "translateY(800px) scale(1) rotate(0deg)"},
        to: [
            {transform: "translateY(0px) scale(1) rotate(0deg)"}, 
            {transform: "translateY(0px) scale(1.1) rotate(-180deg)"}, 
            {transform: "translateY(0px) scale(1) rotate(0deg)"}
        ],
        delay: 200,
        config: config.slow
    },
    {
        from: {transform: "translateY(800px) scale(1)"},
        to: [
            {transform: "translateY(0px) scale(1)"}, 
            {transform: "translateY(0px) scale(1.1)"}, 
            {transform: "translateY(0px) scale(1)"}
        ],
        delay: 200,
        config: config.slow
    }
];

const clearNightSpringsArr = [
    {
        from: {transform: "translateY(800px) scale(1)", opacity: 0.8},
        to: [
            {transform: "translateY(0px) scale(1)", opacity: 0.8}, 
            {transform: "translateY(0px) scale(1.1)", opacity: 0.2},
            {transform: "translateY(0px) scale(1)", opacity: 0.8}
        ],
        delay: 200,
        config: config.slow
    },
    {
        from: {transform: "translateY(800px)"},
        to: {transform: "translateY(0px)"},
        delay: 200,
        config: config.slow
    },
    {
        from: {transform: "translateY(800px)", opacity: 0.2},
        to: [
            {transform: "translateY(0px)", opacity: 0.2}, 
            {transform: "translateY(0px)", opacity: 1}, 
            {transform: "translateY(0px)", opacity: 0.8}
        ],
        delay: 1200,
        config: config.gentle
    },
    {
        from: {transform: "translateY(800px)", opacity: 0.2},
        to: [
            {transform: "translateY(0px)", opacity: 0.2}, 
            {transform: "translateY(0px)", opacity: 1}, 
            {transform: "translateY(0px)", opacity: 0.8}
        ],
        delay: 1100,
        config: config.gentle
    },
    {
        from: {transform: "translateY(800px)", opacity: 0.2},
        to: [
            {transform: "translateY(0px)", opacity: 0.2}, 
            {transform: "translateY(0px)", opacity: 1}, 
            {transform: "translateY(0px)", opacity: 0.8}
        ],
        delay: 900,
        config: config.gentle
    },
    {
        from: {transform: "translateY(800px)", opacity: 0.2},
        to: [
            {transform: "translateY(0px)", opacity: 0.2}, 
            {transform: "translateY(0px)", opacity: 1}, 
            {transform: "translateY(0px)", opacity: 0.8}
        ],
        delay: 1500,
        config: config.gentle
    },
    {
        from: {transform: "translateY(800px)", opacity: 0.2},
        to: [
            {transform: "translateY(0px)", opacity: 0.2}, 
            {transform: "translateY(0px)", opacity: 1}, 
            {transform: "translateY(0px)", opacity: 0.8}
        ],
        delay: 1000,
        config: config.gentle
    },

];

const Cloud1 = () => {
    return(
        <path 
            id="Vector 3" 
            d="M-65 768.5C-167.5 581 20.5 515.5 139.5 581C159.5 396 538 390.5 592 581C632 461.5 788.5 492.5 816.5 581C893.5 430 1172.5 467 1172.5 649C1172.5 535.5 1343 544 1343 649C1547.5 507 1701.5 854 1471 925C1467.81 995.26 1469.3 1008.45 1470.32 1010.49L1471 1010.5C1471 1010.5 1470.69 1011.23 1470.32 1010.49L-65.0001 990.5C-65.0001 990.5 -90.5 1008.38 -90.5 925C-247 857 -147.5 729 -65 768.5Z" 
            fill="#D1D1D1" 
            fillOpacity="0.83"
        />
    );
};

const Cloud2 = () => {
    return(
        <path 
            id="Vector 2" 
            d="M-15.5 905.5C-170 827 -77.5 646.5 58.5 702C58.5 605.5 180 582 215.5 660.5C262 537 455.5 563.5 446 702C475.051 681.664 537.517 703.699 557.912 741.228C527.32 585.017 743.107 568.169 765 660.5C765 598.5 870 587.5 882 648.5C896.5 495.5 1115 515.5 1141 615.5C1204.5 586.5 1291 642.5 1266.5 761.5C1279.26 699.5 1355.5 683.5 1385 732.5C1427.5 639 1654.5 749 1513 895.5C1445 929 1513 979.5 1513 979.5H58.5C58.5 979.5 76.2406 952.113 -15.5 905.5Z" 
            fill="#F2F2F2" 
            fillOpacity="0.85"
        />
    );
};

const Cloud3 = () => {
    return (
        <path 
            id="Vector 1" 
            d="M211.457 775.783C241.957 753.283 317.957 772.283 307.957 831.283C313.642 815.647 349.86 815.278 349.809 841.236C353.33 818.696 382.594 803.895 407.457 820.783C393 764 489.5 739 500.5 799C500.5 661.5 719.5 659.717 760 775C760 694 886.5 692.999 902.5 752.499C950.5 688.499 1056.5 726 1040 800.5C1055.64 770.566 1097.59 780.953 1094.96 807.047C1126.9 713.193 1248.21 710.031 1283.5 784C1296.5 747 1373.5 749.5 1373.5 808C1430.5 784 1502.5 843 1450 908.5C1439.74 921.3 1430.5 929 1430.5 929L10.9566 924.283C10.9566 924.283 15 921 15 904.5C-13.5001 863.5 23.9566 821.283 51.4566 831.283C42.4566 732.783 166.957 723.783 211.457 775.783Z" 
            fill="white" 
            fillOpacity="0.94"
        />
    );
};

const cloudySpringsArr = [
    {
        from: { transform: "translate(300px, 450px)"},
        to: { transform: "translate(0px, 0px)"},
        delay: 300,
        config: config.gentle
    },
    {
        from: { transform: "translate(-250px, 350px)"},
        to: { transform: "translateX(0px, 0px)"},
        delay: 350,
        config: config.gentle
    },
    {
        from: { transform: "translate(300px, 180px)"},
        to: { transform: "translate(0px, 0px)"},
        delay: 400,
        config: config.gentle
    }
];

const RainCloud1 = () => {
    return <path id="raincloud_1" d="M454.5 -20H-101V99.5512C-59.6891 110.401 -21.3925 68.1628 -9.5 42.5C-9.5 109 91.5 121.5 101.5 65.9601C128.415 150.877 263.5 128.54 263.5 53.5C276 99.5512 349.5 81 323 30C374.181 128.5 454.5 92.5 454.5 53.5V-20Z" fill="#D5D5D5" fillOpacity="1"/>;
};

const RainCloud2 = () => {
    return <path id="raincloud_2" d="M515.787 -9H-101V97.8156C-101 178.76 48.7379 199.927 87.7403 123.687C102.636 159.161 177.701 161.905 192.008 123.687C244.926 185.816 346.058 155.241 346.058 107.027C367.421 123.687 399.76 107.027 391.528 72.7287C410.931 114.475 483.252 146.03 515.787 134.858V-9Z" fill="#AFAFAF" fillOpacity="0.91"/>;
};

const RainCloud3 = () => {
    return <path id="raincloud_3" d="M496.579 0H-73V197.099C-13.0919 210.855 45.0056 173.932 34.8707 123.436C45.1872 174.837 111.068 191.127 146.18 162.892C216.767 231.307 342.737 197.099 361.198 119.092C366.447 157.643 425.812 158.548 435.223 135.381C435.223 162.892 469.43 183.344 496.579 177.371V0Z" fill="#757575" fillOpacity="0.68"/>;
};

const RainDrops1 = () => {
    return (
        <>
            <path id="Vector 1_5" d="M65 580L72.9245 594" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 2_5" d="M186 310L193.925 324" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 3_5" d="M198 464L205.925 478" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 4_5" d="M118 424L125.925 438" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 5_5" d="M0 378L7.92453 392" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 6_5" d="M177 199L184.925 213" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 7_5" d="M364 265L371.925 279" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 8_5" d="M247 725L254.925 739" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 9_5" d="M4 621L11.9245 635" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 10_5" d="M259 528L266.925 542" stroke="#DAE3EA" strokeLinecap="round" />
        </>
    );
};

const RainDrops2 = () => {
    return (
        <>
            <path id="Vector 1_4" d="M303 715L310.358 728" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 2_4" d="M112 265L119.358 278" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 3_4" d="M286 357L293.358 370" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 4_4" d="M280 611L287.358 624" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 5_4" d="M402 520L409.358 533" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 6_4" d="M42 261L49.3585 274" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 7_4" d="M148 457L155.358 470" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 8_4" d="M0 715L7.35849 728" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 9_4" d="M318 272L325.358 285" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 10_4" d="M408 254L415.358 267" stroke="#81ACD3" strokeLinecap="round" />
        </>
    );
};

const RainDrops3 = () => {
    return (
        <>
            <path id="Vector 1_3" d="M198 617L205.358 630" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 2_3" d="M269 191L276.358 204" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 3_3" d="M220 338L227.358 351" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 4_3" d="M81 321L88.3585 334" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 5_3" d="M-2 221L5.35849 234" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 6_3" d="M142 190L149.358 203" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 7_3" d="M352 121L359.358 134" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 8_3" d="M112 648L119.358 661" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 9_3" d="M75 446L82.3585 459" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 10_3" d="M318 559L325.358 572" stroke="#81ACD3" strokeLinecap="round" />
        </>
    );
};

const RainDrops4 = () => {
    return (
        <>
            <path id="Vector 1_2" d="M31 349L37.7925 361" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 2_2" d="M166 378L172.792 390" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 3_2" d="M124 550L130.792 562" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 4_2" d="M54 191L60.7925 203" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 5_2" d="M247 265L253.792 277" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 6_2" d="M42 128L48.7925 140" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 7_2" d="M346 490L352.792 502" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 8_2" d="M48 688L54.7925 700" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 9_2" d="M324 181L330.792 193" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 10_2" d="M330 638L336.792 650" stroke="#8CA8C1" strokeLinecap="round" />
        </>
    );
};

const RainDrops5 = () => {
    return (
        <>
            <path id="Vector 1" d="M336 380L342.792 392" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 2" d="M0 455L6.79245 467" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 3" d="M210 541L216.792 553" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 4" d="M21 550L27.7925 562" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 5" d="M212 154L218.792 166" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 6" d="M369 221L375.792 233" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 7" d="M384 690L390.792 702" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 8" d="M220 708L226.792 720" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 9" d="M379 314L385.792 326" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 10" d="M259 446L265.792 458" stroke="#8CA8C1" strokeLinecap="round" />
        </>
    );
};

const Lightning = () => {
    return <path id="lightning" d="M127 253.5L202 81H238L164 231.5L232 222V290L292 324L274 425.5L282 332.5L232 311.5L213.5 405L150 520L202 400L216.5 311.5L213.5 244.5L127 253.5Z" fill="#F4FCFF"/>;
};

const thunderstormSpringsArr = [
    {
        from: {transform: "translateY(-200px)"},
        to: {transform: "translateY(0px)"},
        delay: 500,
        config: config.wobbly
    },
    {
        from: {transform: "translateY(-800px)", opacity: 0},
        to: [{transform: "translateY(0)", opacity: 1}, {transform: "translateY(0)", opacity: 0}],
        delay: 1500,
        config: {duration: 200}
    },
    {
        from: {transform: "translateY(-200px)"},
        to: {transform: "translateY(0px)"},
        delay: 400,
        config: config.wobbly
    },
    {
        from: {transform: "translate(-400px, -600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 800,
        config: config.gentle
    },
    {
        from: {transform: "translate(-400px, -600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 900,
        config: config.gentle
    },
    {
        from: {transform: "translate(-400px, -600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 1100,
        config: config.gentle
    },
    {
        from: {transform: "translate(-400px, -600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 700,
        config: config.gentle
    },
    {
        from: {transform: "translate(-400px, -600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 1000,
        config: config.gentle
    },
    {
        from: {transform: "translateY(-200px)"},
        to: {transform: "translate(0px)"},
        delay: 300,
        config: config.gentle
    }
];

const rainSpringsArr = [
    {
        from: {transform: "translateY(-200px)"},
        to: {transform: "translateY(0px)"},
        delay: 500,
        config: config.wobbly
    },
    {
        from: {transform: "translateY(-200px)"},
        to: {transform: "translateY(0px)"},
        delay: 400,
        config: config.wobbly
    },
    {
        from: {transform: "translate(-400px, -600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 1100,
        config: config.gentle
    },
    {
        from: {transform: "translate(-400px, -600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 700,
        config: config.gentle
    },
    {
        from: {transform: "translate(-400px, -600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 1000,
        config: config.gentle
    },
    {
        from: {transform: "translateY(-200px)"},
        to: {transform: "translate(0px)"},
        delay: 300,
        config: config.gentle
    }
];

const Snow1 = () => {
    return (
        <>
            <circle id="Ellipse 1_5" cx="18" cy="351" r="4" fill="white" fillOpacity="0.74"/>
            <circle id="Ellipse 2_5" cx="56.5" cy="57.5" r="7.5" fill="white" fillOpacity="0.74"/>
            <path id="Ellipse 3_5" d="M244 149C244 151.761 241.761 154 239 154C236.239 154 234 151.761 234 149C234 146.239 236.239 144 239 144C241.761 144 244 146.239 244 149Z" fill="white"/>
            <circle id="Ellipse 4_5" cx="158.5" cy="618.5" r="7.5" fill="white"/>
            <circle id="Ellipse 5_5" cx="357.5" cy="671.5" r="7.5" fill="white" fillOpacity="0.29"/>
            <circle id="Ellipse 6_5" cx="385" cy="293" r="4" fill="white" fillOpacity="0.74"/>
            <circle id="Ellipse 7_5" cx="102.5" cy="333.5" r="7.5" fill="white" fillOpacity="0.74"/>
            <path id="Ellipse 8_5" d="M322.5 91C322.5 93.7614 320.261 96 317.5 96C314.739 96 312.5 93.7614 312.5 91C312.5 88.2386 314.739 86 317.5 86C320.261 86 322.5 88.2386 322.5 91Z" fill="white"/>
            <circle id="Ellipse 9_5" cx="144.5" cy="110.5" r="7.5" fill="white"/>
            <circle id="Ellipse 10_5" cx="113.5" cy="209.5" r="7.5" fill="white" fillOpacity="0.29"/>
        </>
    );
};

const Snow2 = () => {
    return (
        <>
            <circle id="Ellipse 1_4" cx="87" cy="166" r="4" fill="white" fillOpacity="0.74"/>
            <circle id="Ellipse 2_4" cx="26.5" cy="22.5" r="7.5" fill="white" fillOpacity="0.74"/>
            <path id="Ellipse 3_4" d="M281 274C281 276.761 278.761 279 276 279C273.239 279 271 276.761 271 274C271 271.239 273.239 269 276 269C278.761 269 281 271.239 281 274Z" fill="white"/>
            <circle id="Ellipse 4_4" cx="350.5" cy="375.5" r="7.5" fill="white"/>
            <circle id="Ellipse 5_4" cx="320.5" cy="705.5" r="7.5" fill="white" fillOpacity="0.29"/>
            <circle id="Ellipse 6_4" cx="366" cy="234" r="4" fill="white" fillOpacity="0.74"/>
            <circle id="Ellipse 7_4" cx="151.5" cy="387.5" r="7.5" fill="white" fillOpacity="0.74"/>
            <path id="Ellipse 8_4" d="M230 48C230 50.7614 227.761 53 225 53C222.239 53 220 50.7614 220 48C220 45.2386 222.239 43 225 43C227.761 43 230 45.2386 230 48Z" fill="white"/>
            <circle id="Ellipse 9_4" cx="33.5" cy="705.5" r="7.5" fill="white"/>
            <circle id="Ellipse 10_4" cx="335.5" cy="555.5" r="7.5" fill="white" fillOpacity="0.29"/>
        </>
    );
};

const Snow3 = () => {
    return (
        <>
            <circle id="Ellipse 1_3" cx="308" cy="447" r="4" fill="white" fillOpacity="0.74"/>
            <circle id="Ellipse 2_3" cx="214.5" cy="202.5" r="7.5" fill="white" fillOpacity="0.74"/>
            <path id="Ellipse 3_3" d="M126 18C126 20.7614 123.761 23 121 23C118.239 23 116 20.7614 116 18C116 15.2386 118.239 13 121 13C123.761 13 126 15.2386 126 18Z" fill="white"/>
            <circle id="Ellipse 4_3" cx="175.5" cy="509.5" r="7.5" fill="white"/>
            <circle id="Ellipse 5_3" cx="268.5" cy="710.5" r="7.5" fill="white" fillOpacity="0.29"/>
            <circle id="Ellipse 6_3" cx="414" cy="378" r="4" fill="white" fillOpacity="0.74"/>
            <circle id="Ellipse 7_3" cx="48.5" cy="454.5" r="7.5" fill="white" fillOpacity="0.74"/>
            <path id="Ellipse 8_3" d="M390 43C390 45.7614 387.761 48 385 48C382.239 48 380 45.7614 380 43C380 40.2386 382.239 38 385 38C387.761 38 390 40.2386 390 43Z" fill="white"/>
            <circle id="Ellipse 9_3" cx="7.5" cy="618.5" r="7.5" fill="white"/>
            <circle id="Ellipse 10_3" cx="56.5" cy="235.5" r="7.5" fill="white" fillOpacity="0.29"/>
        </>
    );
};

const Snow4 = () => {
    return (
        <>
            <circle id="Ellipse 1_2" cx="18" cy="351" r="4" fill="white" fillOpacity="0.37"/>
            <circle id="Ellipse 2_2" cx="56.5" cy="57.5" r="7.5" fill="white" fillOpacity="0.74"/>
            <path id="Ellipse 3_2" d="M259 156.5C259 163.404 253.404 169 246.5 169C239.596 169 234 163.404 234 156.5C234 149.596 239.596 144 246.5 144C253.404 144 259 149.596 259 156.5Z" fill="white" fillOpacity="0.24"/>
            <circle id="Ellipse 4_2" cx="146.5" cy="534.5" r="11.5" fill="white" fillOpacity="0.39"/>
            <circle id="Ellipse 5_2" cx="357.5" cy="671.5" r="7.5" fill="white" fillOpacity="0.29"/>
            <circle id="Ellipse 6_2" cx="385" cy="293" r="4" fill="white" fillOpacity="0.4"/>
            <circle id="Ellipse 7_2" cx="405" cy="567" r="4" fill="white" fillOpacity="0.74"/>
            <path id="Ellipse 8_2" d="M247 696.5C247 703.956 240.956 710 233.5 710C226.044 710 220 703.956 220 696.5C220 689.044 226.044 683 233.5 683C240.956 683 247 689.044 247 696.5Z" fill="white" fillOpacity="0.3"/>
            <circle id="Ellipse 9_2" cx="8.5" cy="602.5" r="12.5" fill="white" fillOpacity="0.2"/>
            <circle id="Ellipse 10_2" cx="113.5" cy="209.5" r="7.5" fill="white" fillOpacity="0.29"/>
        </>
    );
};

const Snow5 = () => {
    return (
        <>
            <circle id="Ellipse 1" cx="257" cy="429" r="4" fill="white" fillOpacity="0.37"/>
            <circle id="Ellipse 2" cx="25.5" cy="23.5" r="7.5" fill="white" fillOpacity="0.74"/>
            <path id="Ellipse 3" d="M325 77.5C325 84.4036 319.404 90 312.5 90C305.596 90 300 84.4036 300 77.5C300 70.5964 305.596 65 312.5 65C319.404 65 325 70.5964 325 77.5Z" fill="white" fillOpacity="0.24"/>
            <circle id="Ellipse 4" cx="76.5" cy="477.5" r="11.5" fill="white" fillOpacity="0.39"/>
            <circle id="Ellipse 5" cx="358.5" cy="600.5" r="7.5" fill="white" fillOpacity="0.29"/>
            <circle id="Ellipse 6" cx="189" cy="320" r="4" fill="white" fillOpacity="0.4"/>
            <circle id="Ellipse 7" cx="269" cy="370" r="4" fill="white" fillOpacity="0.74"/>
            <path id="Ellipse 8" d="M117 711.5C117 718.956 110.956 725 103.5 725C96.0442 725 90 718.956 90 711.5C90 704.044 96.0442 698 103.5 698C110.956 698 117 704.044 117 711.5Z" fill="white" fillOpacity="0.3"/>
            <circle id="Ellipse 9" cx="279.5" cy="712.5" r="12.5" fill="white" fillOpacity="0.2"/>
            <circle id="Ellipse 10" cx="95.5" cy="197.5" r="7.5" fill="white" fillOpacity="0.29"/>
        </>
    );
};

const snowSpringsArr = [
    {
        from: {transform: "translate(100px, -600px)", opacity: 0},
        to: [
            {transform: "translate(-80px, -400px)", opacity: 1},
            {transform: "translate(60px, -300px)", opacity: 0},
            {transform: "translate(-50px, -200px)", opacity: 1},
            {transform: "translate(20px, -100px)", opacity: 0},
            {transform: "translate(0px, 0px)", opacity: 1}
        ],
        delay: 500,
        config: {duration: 1000}
    },
    {
        from: {transform: "translate(-100px, -600px)", opacity: 0},
        to: [
            {transform: "translate(90px, -400px)", opacity: 1},
            {transform: "translate(-70px, -300px)", opacity: 0},
            {transform: "translate(50px, -200px)", opacity: 1},
            {transform: "translate(-30px, -100px)", opacity: 0},
            {transform: "translate(0px, 0px)", opacity: 1}
        ],
        delay: 400,
        config: {duration: 1000}
    },
    {
        from: {transform: "translate(120px, -600px)", opacity: 0},
        to: [
            {transform: "translate(-70px, -400px)", opacity: 1},
            {transform: "translate(70px, -300px)", opacity: 0},
            {transform: "translate(-40px, -200px)", opacity: 1},
            {transform: "translate(30px, -100px)", opacity: 0},
            {transform: "translate(0px, 0px)", opacity: 1}
        ],
        delay: 300,
        config: {duration: 1000}
    },
    {
        from: {transform: "translate(-150px, -600px)", opacity: 0},
        to: [
            {transform: "translate(90px, -400px)", opacity: 0},
            {transform: "translate(-80px, -300px)", opacity: 1},
            {transform: "translate(60px, -200px)", opacity: 0},
            {transform: "translate(-40px, -100px)", opacity: 0},
            {transform: "translate(0px, 0px)", opacity: 1}
        ],
        delay: 200,
        config: {duration: 1000}
    },
    {
        from: {transform: "translate(200px, -600px)", opacity: 0},
        to: [
            {transform: "translate(-180px, -400px)", opacity: 1},
            {transform: "translate(150px, -300px)", opacity: 0},
            {transform: "translate(-80px, -200px)", opacity: 1},
            {transform: "translate(60px, -100px)", opacity: 0},
            {transform: "translate(0px, 0px)", opacity: 1}
        ],
        delay: 100,
        config: {duration: 1000}
    },
];

const DrizzleRaindrops1 = () => {
    return (
        <>
            <path id="Vector 1_3" d="M139 179V198" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 2_3" d="M48 270V289" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 3_3" d="M354 221V240" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 4_3" d="M132 407V426" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 5_3" d="M364 466V485" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 6_3" d="M280 708V727" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 7_3" d="M48 663V682" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 8_3" d="M265 338V357" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 9_3" d="M348 652V671" stroke="#DAE3EA" strokeLinecap="round" />
            <path id="Vector 10_3" d="M156 589V608" stroke="#DAE3EA" strokeLinecap="round" />
        </>
    );
};

const DrizzleRaindrops2 = () => {
    return (
        <>
            <path id="Vector 1_2" d="M48 172V189" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 2_2" d="M17 317V334" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 3_2" d="M258 263V280" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 4_2" d="M230 423V440" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 5_2" d="M327 317V334" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 6_2" d="M319 646V663" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 7_2" d="M101 629V646" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 8_2" d="M172 300V317" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 9_2" d="M178 708V725" stroke="#81ACD3" strokeLinecap="round" />
            <path id="Vector 10_2" d="M60 470V487" stroke="#81ACD3" strokeLinecap="round" />
        </>
    );
};

const DrizzleRaindrops3 = () => {
    return (
        <>
            <path id="Vector 1" d="M101 221V236" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 2" d="M101 374V389" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 3" d="M218 200V215" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 4" d="M178 512V527" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 5" d="M364 417V432" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 6" d="M384 566V581" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 7" d="M32 574V589" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 8" d="M375 206V221" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 9" d="M290 533V548" stroke="#8CA8C1" strokeLinecap="round" />
            <path id="Vector 10" d="M336 155V170" stroke="#8CA8C1" strokeLinecap="round" />
        </>
    );
};

const drizzleSpringsArr = [
    {
        from: {transform: "translateY(-200px)"},
        to: {transform: "translateY(0px)"},
        delay: 500,
        config: config.wobbly
    },
    {
        from: {transform: "translateY(-200px)"},
        to: {transform: "translateY(0px)"},
        delay: 400,
        config: config.wobbly
    },
    {
        from: {transform: "translateY(-600px)", opacity: 0},
        to: {transform: "translateY(0px)", opacity: 1},
        delay: 800,
        config: config.gentle
    },
    {
        from: {transform: "translateY(-600px)", opacity: 0},
        to: {transform: "translateY(0px)", opacity: 1},
        delay: 900,
        config: config.gentle
    },
    {
        from: {transform: "translateY(-600px)", opacity: 0},
        to: {transform: "translateY(0px)", opacity: 1},
        delay: 1100,
        config: config.gentle
    },
    {
        from: {transform: "translateY(-200px)"},
        to: {transform: "translate(0px)"},
        delay: 300,
        config: config.gentle
    }
];

const Haze1 = () => {
    return <path id="haze_1" d="M222.5 393C55.5 299 6 566.5 -111.5 282.5V773H549L554.5 262C554.5 262 385.019 193 318 320.5C297.5 359.5 278.944 424.771 222.5 393Z" fill="#E0E0E0" fillOpacity="0.35"/>;
};

const Haze2 = () => {
    return <path id="haze_2" d="M223.5 476C124.087 550.752 -111.5 398 -111.5 398V773H549V451.5C549 451.5 417 330.5 223.5 476Z" fill="#E0E0E0" fillOpacity="0.35"/>;
};

const Haze3 = () => {
    return <path id="haze_3" d="M195 680.5C136 716 -23 708.5 -100 708.5C-148.035 708.5 -73.5001 767 -73.5001 767H527C527 767 491.072 691.483 466 656C380.5 535 252.392 645.968 195 680.5Z" fill="#E2E2E2" fillOpacity="0.7"/>;
};

const Haze4 = () => {
    return <path id="haze_4" d="M160.5 550.918C44.1124 533.103 -141 550.918 -141 550.918V709.418C-141 709.418 201.981 623.7 326 634.918C509.909 651.552 554 794.418 554 794.418V719.418C554 719.418 409 531.918 356 551.418C337.312 558.293 338.5 576.918 327.5 587.418C309.5 603.418 249 564.464 160.5 550.918Z" fill="#F4F4F4" fillOpacity="0.55"/>;
};

const Haze5 = () => {
    return <path id="haze_5" d="M80.5 448C-13 427.713 -116 474.408 -116 474.408V600.908C-116 600.908 -76.5 543.5 -26.5 521C17.2556 501.31 86.4926 476.751 135 492.5C219 519.773 268.911 651.879 315.5 579.5C399.5 449 587 533.5 587 533.5V419C587 419 406 361.5 368.5 456.5C341.734 524.307 277.195 525.659 214.5 507C172.5 494.5 133.5 459.5 80.5 448Z" fill="#EDEDED" fillOpacity="0.77"/>;
};

const atmosphereSpringsArr = [
    {
        from: {transform: "translate(-100px, 600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 200,
        config: config.slow
    },
    {
        from: {transform: "translate(-200px, 600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 300,
        config: config.slow
    },
    {
        from: {transform: "translate(-300px, 600px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 400,
        config: config.slow
    },
    {
        from: {transform: "translate(-100px, 100px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 700,
        config: config.slow
    },
    {
        from: {transform: "translate(-100px, 50px)", opacity: 0},
        to: {transform: "translate(0px, 0px)", opacity: 1},
        delay: 900,
        config: config.slow
    }
]

const ClearWeather = (props) => {

    const { timeOfDay } = props;
    const sunComponentsArr = [<SunGlow2 />, <SunGlow1 />, <Sun />];
    const moonComponentsArr = [<MoonGlow />, <Moon />, <Star1 />, <Star2 />, <Star3 />, <Star4 />, <Star5 />];

    const [springs, api] = useSprings(
        timeOfDay === "night" ? moonComponentsArr.length : sunComponentsArr.length, 
        index => timeOfDay === "night" ? clearNightSpringsArr[index] : clearDaySpringsArr[index]
    );

    useEffect(() => {
        return () => {
            api.delete();
        };
    }, []);

    if(timeOfDay === "night"){
        return (
            <svg id="clear_svg" height="100%" viewBox="0 0 414 736" fill="none" xmlns="http://www.w3.org/2000/svg">
                {springs.map((spring, index) => (
                    <animated.g key={index} style={{...spring, transformOrigin: "50% 178px"}}>
                        {console.log(spring)}
                        {moonComponentsArr[index]}
                    </animated.g>
                ))}
            </svg>
        );
    };
    return (
        <svg id="clear_svg" height="100%" viewBox="0 0 414 736" fill="none" xmlns="http://www.w3.org/2000/svg">
            {springs.map((spring, index) => (
                <animated.g key={index} style={{...spring, transformOrigin: "50% 172px"}}>
                    {sunComponentsArr[index]}
                </animated.g>
            ))}
        </svg>
    );
};

const CloudyWeather = () => {

    const clouds = [<Cloud1 />, <Cloud2 />, <Cloud3 />];

    const [springs, api] = useSprings(clouds.length, index => cloudySpringsArr[index]);

    useEffect(() => {
        return () => {
            api.delete();
        }
    }, []);

    return(
        <svg id="cloudy_svg" height="200" width="500" viewBox="550 420 350 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            {springs.map((spring, index) => (
                <animated.g key={index} style={spring}>
                    {clouds[index]}
                </animated.g>
            ))}
        </svg>
    );
};

const ThunderstormWeather = () => {
    const thunderstormComponentsArr = [
        <RainCloud3 />,
        <Lightning />,
        <RainCloud2 />, 
        <RainDrops5 />, 
        <RainDrops4 />, 
        <RainDrops3 />, 
        <RainDrops2 />, 
        <RainDrops1 />, 
        <RainCloud1 />
    ];

    const [springs, api] = useSprings(thunderstormComponentsArr.length, index => thunderstormSpringsArr[index]);

    useEffect(() => {
        return () => {
            api.delete();
        }
    }, []);

    return (
        <svg id="thunderstorm_svg" width="100%" viewBox="0 0 414 736" >
            {springs.map((spring, index) => (
                <animated.g key={index} style={{ ...spring, transformOrigin: "50% 0px" }}>
                    {thunderstormComponentsArr[index]}
                </animated.g>
            ))}
        </svg>
    );
};

const DrizzleWeather = () => {
    const drizzleComponentsArr = [
        <RainCloud3 />, 
        <RainCloud2 />,
        <DrizzleRaindrops3 />, 
        <DrizzleRaindrops2 />, 
        <DrizzleRaindrops1 />, 
        <RainCloud1 />
    ];

    const [springs, api] = useSprings(drizzleComponentsArr.length, index => drizzleSpringsArr[index]);

    useEffect(() => {
        return () => {
            api.delete();
        };
    }, []);

    return (
        <svg id="drizzle_svg" width="100%" viewBox="0 0 414 736" fill="none" xmlns="http://www.w3.org/2000/svg">
            {springs.map((spring, index) => (
                <animated.g style={spring}>
                    {drizzleComponentsArr[index]}
                </animated.g>
            ))}
        </svg>
    );
};

const RainWeather = () => {
    const rainComponentsArr = [
        <RainCloud3 />,
        <RainCloud2 />,
        <RainDrops3 />, 
        <RainDrops2 />, 
        <RainDrops1 />, 
        <RainCloud1 />
    ];

    const [springs, api] = useSprings(rainComponentsArr.length, index => rainSpringsArr[index]);

    useEffect(() => {
        return () => {
            api.delete();
        }
    }, []);

    return (
        <svg id="rain_svg" width="100%" viewBox="0 0 414 736" >
            {springs.map((spring, index) => (
                <animated.g key={index} style={{ ...spring, transformOrigin: "50% 0px" }}>
                    {rainComponentsArr[index]}
                </animated.g>
            ))}
        </svg>
    );
};

const SnowWeather = () => {
    const snowComponentsArr = [<Snow1 />, <Snow2 />, <Snow3 />, <Snow4 />, <Snow5 />];

    const [springs, api] = useSprings(snowComponentsArr.length, index => snowSpringsArr[index]);

    useEffect(() => {
        return () => {
            api.delete();
        };
    }, []);

    return (
        <svg id="snow_svg" width="100%" viewBox="0 0 414 736" fill="none" xmlns="http://www.w3.org/2000/svg">
            {springs.map((spring, index) => (
                <animated.g style={spring}>
                    {snowComponentsArr[index]}
                </animated.g>
            ))}
        </svg>
    );

};

const AtmoshpereWeather = () => {

    const hazeComponentsArr = [<Haze1 />, <Haze2 />, <Haze3 />, <Haze4 />, <Haze5 />];

    const [springs, api] = useSprings(hazeComponentsArr.length, index => atmosphereSpringsArr[index]);

    useEffect(() => {
        return () => {
            api.delete();
        };
    }, []);

    return (
        <svg id="atmosphere_svg" width="100%" viewBox="0 0 414 736" fill="none" xmlns="http://www.w3.org/2000/svg">
            {springs.map((spring, index) => (
                <animated.g style={spring}>
                    {hazeComponentsArr[index]}
                </animated.g>
            ))}
        </svg>
    );
};

const getBackgroundColor = (weatherCode, timeOfDay) => {
    const lightness = [0.9, 1, 0.5, 0.7, 1, 0.6, 0.9, 0.8];
    const saturation = [0.6, 1, 0.1, 0.3, 1, 0.2, 0.7, 0.2];
    const background = () => {
        if(timeOfDay === "day"){
            return (`
                hsl(202, ${87*saturation[weatherCode%8]}%, ${63*lightness[weatherCode%8]}%),
                hsl(200, ${80*saturation[weatherCode%8]}%, ${75*lightness[weatherCode%8]}%), 
                hsl(200, ${82*saturation[weatherCode%8]}%, ${78*lightness[weatherCode%8]}%)
            `);
        } else if(timeOfDay === "night"){
            return (`
                hsl(232, ${70*saturation[weatherCode%8]}%, ${28*lightness[weatherCode%8]}%),
                hsl(258, ${39*saturation[weatherCode%8]}%, ${36*lightness[weatherCode%8]}%), 
                hsl(249, ${38*saturation[weatherCode%8]}%, ${45*lightness[weatherCode%8]}%)
            `);
        } else if(timeOfDay === "dawn"){
            return (`
                hsl(219, ${41*saturation[weatherCode%8]}%, ${61*lightness[weatherCode%8]}%),
                hsl(349, ${54*saturation[weatherCode%8]}%, ${70*lightness[weatherCode%8]}%), 
                hsl(10, ${97*saturation[weatherCode%8]}%, ${86*lightness[weatherCode%8]}%)
            `);
        } else{
            return (`
                hsl(265, ${43*saturation[weatherCode%8]}%, ${28*lightness[weatherCode%8]}%),
                hsl(315, ${45*saturation[weatherCode%8]}%, ${32*lightness[weatherCode%8]}%), 
                hsl(351, ${85*saturation[weatherCode%8]}%, ${60*lightness[weatherCode%8]}%)
            `);
        }
    };

    return { background: `linear-gradient(${background()})` };

};

const Background = (props) => {

    const { weatherId = 400, time = 12 } = props;
    const [weatherCode, setWeatherCode] = useState(4);
    const [timeOfDay, setTimeOfDay] = useState("day");

    useEffect(() => {
        if(weatherId === 800){
            setWeatherCode(9);
        } else{
            setWeatherCode(parseInt(weatherId/100));
        }
    }, [weatherId]);

    useEffect(() => {
        if(time <= 5 || time >= 19){
            time === 5 ? setTimeOfDay("dawn") : setTimeOfDay("night");
        } else if(time >= 6 && time <= 18){
            time === 18 ? setTimeOfDay("dusk") : setTimeOfDay("day");
        }
    }, [time]);

    return (
        <div className="background-container" style={getBackgroundColor(weatherCode, timeOfDay)}>
            {weatherCode === 2 && <ThunderstormWeather />} 
            {weatherCode === 3 && <DrizzleWeather />}
            {weatherCode === 5 && <RainWeather />}
            {weatherCode === 6 && <SnowWeather />}
            {weatherCode === 7 && <AtmoshpereWeather />}
            {weatherCode === 8 && <CloudyWeather />}
            {weatherCode === 9 && <ClearWeather timeOfDay={timeOfDay}/>}
        </div>
    );
};

export default memo(Background);
