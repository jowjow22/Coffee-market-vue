<template>
  <main class="h-screen w-screen flex items-center justify-center gap-x-28">
    <section class="mt-20 px-5 lg:px-0 lg:mt-0">
      <h1 class="title-l text-yellow-dark">Uhu! Pedido Confirmado</h1>
      <p class="text-base-text mb-14 text-l">
        Agora é só aguardar que logo o café chegará até você
      </p>
      <Paper gradient-border>
        <ul class="flex flex-col gap-y-7 p-5">
          <li class="flex flex-row items-center gap-x-3 max-w-fit">
            <span
              class="min-w-[32px] h-8 rounded-full grid place-items-center bg-purple"
            >
              <PhMapPin :size="18" color="white" weight="fill" />
            </span>
            <p class="text-sm text-base-text" v-html="formatedAdress"></p>
          </li>
          <li class="flex flex-row items-center gap-x-3 max-w-fit">
            <span
              class="min-w-[32px] h-8 rounded-full grid place-items-center bg-yellow"
            >
              <PhTimer :size="18" color="white" weight="fill" />
            </span>
            <p class="text-sm flex flex-col text-base-text">
              <span>Previsão de entrega</span>
              <span class="text-m font-bold text-base-text"
                >20 min - 30min</span
              >
            </p>
          </li>
          <li class="flex flex-row items-center gap-x-3 max-w-fit">
            <span
              class="min-w-[32px] h-8 rounded-full grid place-items-center bg-yellow-dark"
            >
              <PhCurrencyDollar :size="18" color="white" weight="regular" />
            </span>
            <p class="text-sm flex flex-col text-base-text">
              <span>Pagamento na entrega</span>
              <span class="text-m font-bold text-base-text">{{
                paymentMethod
              }}</span>
            </p>
          </li>
        </ul>
      </Paper>
    </section>
    <img :src="Ilustartion" class="mt-24 hidden lg:inline" />
  </main>
</template>
<script lang="ts" setup>
import Ilustartion from "@/assets/images/Illustration.svg";
import Paper from "@/components/Paper/Paper.vue";
import { PhMapPin, PhTimer, PhCurrencyDollar } from "@phosphor-icons/vue";
import { useOrderStore } from "@/store/orderStore";
import { computed } from "vue";

const orderStore = useOrderStore();

const formatedAdress = computed(() => {
  const { street, number, neighborhood, city, state } = orderStore.getAdress;
  return `Entrega em <span class="text-m font-bold text-base-text">${street}, ${number}</span><br> ${neighborhood} - ${city}, ${state}`;
});

const paymentMethod = orderStore.getPaymentMethod;
</script>
