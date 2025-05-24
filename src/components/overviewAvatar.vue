    <script setup lang="ts">
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
defineProps([ 'avatar', 'author', 'price', 'hour', 'city', 'name'])

</script>
<template>
    <div class="flex flex-col mr-16 ml-16 ">
        <div class="pt-4 pb-4 border-b-2 flex flex-col">
            <h4>Organizadora</h4>
            <div class="flex flex-row">
                <Avatar>
                    <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                </Avatar>
                <div class="flex flex-col">
                    <p>{{ author }}</p>
                    <div class="flex flex-row gap-4">
                        <p>{{ city }}</p>
                        <p>{{ name }}</p>
                    </div>
                </div>
            </div>
        <Button variant="support" class="pl-0 w-22 h-6 text-[#475467]">
            Contact
        </Button> 
        </div>
    </div>
    <div class="flex flex-col mr-16 ml-16 ">
        <div class="pt-4 pb-4 border-b-2 flex flex-col">
            <h4>Words of support</h4>
            <div class="flex flex-row">
                <Avatar>
                    <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                </Avatar>
                <div class="flex flex-col">
                    <p>{{ author }}</p>
                    <div class="flex flex-row gap-4">
                        <p>{{ price }}</p>
                        <p>{{ hour }}</p>
                    </div>
                </div>
            </div>
        <Button variant="support" class="pl-0 w-22 h-6 text-[#475467]">
            Contact
        </Button> 
        </div>
    </div>
    
</template>