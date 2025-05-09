<template>
    <div class="bg-[#F1F5F9] min-h-[418px] flex absolute w-full bottom-0">
        <div class="flex flex-col justify-evenly gap-[50px] w-full pl-[32px] pr-[32px] ">
            <div class="flex flex-row justify-evenly lg:justify-between flex-wrap gap-[48px] max-w-[1280px] w-full ml-auto mr-auto">
                <div class="flex flex-col gap-4">
                    <p class="text-[#1E293B] font-medium text-[16px]">
                        Home
                    </p>
                    <ul class="flex flex-col gap-3">
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">My favorites</router-link>
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Recents</router-link>
                    </ul>
                </div>
                <div class="flex flex-col gap-4">
                    <p class="text-[#1E293B] font-medium text-[16px]">
                        Explore
                    </p>
                    <ul class="flex flex-col gap-3">
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Lists</router-link>
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Maps</router-link>
                    </ul>
                </div>
                <div class="flex flex-col gap-4">
                    <p class="text-[#1E293B] font-medium text-[16px]">
                        Campaigns
                    </p>
                    <ul class="flex flex-col gap-3">
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Home</router-link>
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Campaigns</router-link>
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Donations</router-link>
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Analytics</router-link>
                    </ul>
                </div>
                <div class="flex flex-col gap-4">
                    <p class="text-[#1E293B] font-medium text-[16px]">
                        Profile
                    </p>
                    <ul class="flex flex-col gap-3">
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Settings</router-link>
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Notifications</router-link>
                    </ul>
                </div>
                <div class="flex flex-col gap-4 ">
                    <p class="text-[#1E293B] font-medium text-[16px]">
                        Resources
                    </p>
                    <ul class="flex flex-col gap-3">
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">How to use Crowdfy</router-link>
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Docs</router-link>
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Legal Terms</router-link>
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Blog</router-link>
                        <router-link to="/" class="text-[#475569] hover:text-[#84CC16] font-medium transition">Merch</router-link>
                    </ul>
                </div>

            </div>
            <div class="flex flex-row flex-wrap gap-8 justify-between max-w-[1280px] w-full ml-auto mr-auto">
                <img src="/public/footerLogo.png" alt="Footer logo">
                <p class="font-normal text-[#667085] text-base leading-6 tracking-normal font-[Plus Jakarta Sans]">
                    © 2077 Mainnet Design. All rights reserved.
                </p>            
            </div>
        </div>
    </div>
</template>