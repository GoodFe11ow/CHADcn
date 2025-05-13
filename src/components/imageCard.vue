<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
defineProps(['title', 'desc', 'author', 'image'])

</script>
<template>
    <div class="pr-8 pl-8 flex justify-center">
        <div class="flex flex-row flex-wrap justify-evenly">
            <div class="flex flex-col gap-4 w-[396px] h-[424px] border-[#EAECF0] rounded-lg overflow-hidden relative"><!-- img card -->
                <div> <!-- img part -->
                    <img src="https://picsum.photos/396/176" alt="">
                    <div class="flex flex-row gap-2 absolute top-33 right-2">
                        <Button variant="imageCard" class="">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </Button> 
                        <Button variant="imageCard" class="">
                            <i class="fa-regular fa-heart"></i>
                        </Button>                         
                    </div>
                </div>
                <div class="flex flex-col"> <!-- avatar and name part -->
                    <div class="flex flex-row pl-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Badge></Badge>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

