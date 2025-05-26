<template>
    <div class="flex flex-wrap gap-5 px-6">
        <MyCampaignsBankCard 
            v-for="(a, i) in bank_data"
            :key="i"
            :title="a.title"
            :name="a.name"
            :card_number="a.card_number"
            :amount_collected="a.amount_collected"
            :percentage="a.percentage"
            :bgColorClass="a.bgColorClass"
            :textColorClass="a.textColorClass"
            :image="a.image"
        />
    </div>
</template>

<script setup>
    import MyCampaignsBankCard from './MyCampaignsBankCard.vue';
    import bank_img from '../assets/bankcardimg.png';
    import bank_img2 from '../assets/bankcardimg2.png';
    import bank_img3 from '../assets/bankcardimg3.png';

    const bank_data = [
        {
            image: bank_img,
            title: 'Renovate Kingstown Orphanage',
            name: 'ana yamamoto',
            card_number: '0xbb AC23 43af 98fg',
            amount_collected: '$2,840.40',
            percentage: '55'
        },
        {
            image: bank_img2,
            title: 'Install Water Well in Kingstown',
            name: 'ana yamamoto',
            card_number: '5226 6749 6789 4341',
            amount_collected: '$1,260.20',
            percentage: '30',
            bgColorClass: 'bg-lime-800',
            textColorClass: 'text-white'

        },
        {
            image: bank_img3,
            title: 'Install Water Well in Kingstown',
            name: 'ana yamamoto',
            card_number: '5226 6749 6789 4341',
            amount_collected: '$1,260.20',
            percentage: '30'
        },
        {
            image: bank_img3,
            title: 'Install Water Well in Kingstown',
            name: 'ana yamamoto',
            card_number: '5226 6749 6789 4341',
            amount_collected: '$1,260.20',
            percentage: '30'
        },
    ]
</script>