<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maintenance Mode</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .maintenance-bg {
            background: linear-gradient(135deg, #831010 0%, #5a0a0a 100%);
            min-height: 100vh;
            overflow: hidden;
            position: relative;
        }

        .maintenance-card {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
            border-radius: 1.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 10;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Animated Gear */
        .gear {
            animation: spin 8s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        /* Ornament Circles */
        .ornament-circle {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            z-index: 1;
        }

        .circle-1 {
            width: 300px;
            height: 300px;
            top: -100px;
            left: -100px;
            animation: pulse 6s ease-in-out infinite alternate;
        }

        .circle-2 {
            width: 500px;
            height: 500px;
            bottom: -200px;
            right: -200px;
            animation: pulse 8s ease-in-out infinite alternate-reverse;
        }

        .circle-3 {
            width: 200px;
            height: 200px;
            top: 50%;
            right: 10%;
            animation: pulse 5s ease-in-out infinite alternate;
        }

        /* Ornament Triangles */
        .ornament-triangle {
            position: absolute;
            width: 0;
            height: 0;
            border-left: 100px solid transparent;
            border-right: 100px solid transparent;
            border-bottom: 200px solid rgba(255, 255, 255, 0.03);
            top: 30%;
            left: 10%;
            transform: rotate(45deg);
            animation: float 7s ease-in-out infinite;
        }

        /* Animations */
        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 0.1;
            }

            100% {
                transform: scale(1.1);
                opacity: 0.2;
            }
        }

        @keyframes float {
            0% {
                transform: translateY(0) rotate(45deg);
            }

            50% {
                transform: translateY(-20px) rotate(45deg);
            }

            100% {
                transform: translateY(0) rotate(45deg);
            }
        }

        /* Glow Effect */
        .glow {
            text-shadow: 0 0 10px rgba(255, 100, 100, 0.7);
        }

        /* Flicker Effect */
        .flicker {
            animation: flicker 3s linear infinite;
        }

        @keyframes flicker {

            0%,
            19.999%,
            22%,
            62.999%,
            64%,
            64.999%,
            70%,
            100% {
                opacity: 1;
            }

            20%,
            21.999%,
            63%,
            63.999%,
            65%,
            69.999% {
                opacity: 0.7;
            }
        }
    </style>
</head>

<body class="maintenance-bg flex items-center justify-center p-4">
    <!-- Decorative Ornaments -->
    <div class="ornament-circle circle-1"></div>
    <div class="ornament-circle circle-2"></div>
    <div class="ornament-circle circle-3"></div>
    <div class="ornament-triangle"></div>

    <!-- Main Content -->
    <div class="maintenance-card text-white p-8 max-w-2xl w-full text-center">
        <div class="flex justify-center mb-8">
            <svg class="gear h-24 w-24 text-red-300" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>

        <h1 class="text-4xl font-bold mb-6 glow flicker">SEDANG DALAM PEMELIHARAAN</h1>
        <p class="text-xl mb-8 text-red-100">Kami sedang melakukan peningkatan sistem untuk memberikan pengalaman yang
            lebih baik bagi Anda.</p>

        <div class="bg-white bg-opacity-10 rounded-xl p-5 mb-8 border border-red-300 border-opacity-20">
            <p class="font-medium mb-2 text-red-200">Mohon maaf atas ketidaknyamanan ini</p>
            <p class="text-red-100">Tim kami bekerja secepat mungkin untuk menyelesaikan pemeliharaan ini.</p>
        </div>

        <div class="flex justify-center space-x-4 mb-8">
            <div class="h-3 w-3 bg-red-400 rounded-full animate-bounce" style="animation-delay: 0s"></div>
            <div class="h-3 w-3 bg-red-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            <div class="h-3 w-3 bg-red-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
        </div>

        <p class="text-sm opacity-80 text-red-200">Terima kasih atas pengertian dan kesabaran Anda.</p>
    </div>
</body>

</html>
