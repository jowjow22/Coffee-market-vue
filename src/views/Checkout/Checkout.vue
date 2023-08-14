<template>
  <form
    @submit.prevent
    class="flex flex-wrap gap-y-6 gap-10 h-screen px-4 justify-center"
  >
    <div class="my-auto flex flex-row flex-wrap gap-y-10 gap-x-16">
      <section class="flex flex-col gap-y-4">
        <p class="title-xs">Complete seu pedido</p>
        <Paper large :rounded="false" class="flex flex-col gap-y-4">
          <p class="grid grid-cols-[1fr_26fr] grid-rows-[1fr_2fr]">
            <PhMapPinLine
              :size="18"
              weight="regular"
              class="fill-yellow-dark row-span-2"
            />
            <span class="flex gap-x-1 text-base-subtitle text-m">
              Endereço de entrega
            </span>
            <span class="text-s text-base-text">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </p>
          <fieldset
            class="flex flex-col lg:grid lg:grid-cols-9 lg:grid-rows-4 gap-3 items-center justify-center lg:w-[42rem]"
          >
            <Input
              class="row-start-1 row-end-1 col-start-1 col-end-4"
              v-model="address.cep"
              placeholder="CEP"
              required
            />
            <Input
              class="row-start-2 row-end-2 col-start-1 col-end-10"
              v-model="address.street"
              placeholder="Rua"
              required
            />
            <Input
              class="col-start-1 col-end-4"
              v-model="address.number"
              placeholder="Numero"
              required
            />
            <Input
              class="col-start-4 col-end-10"
              v-model="address.complement"
              placeholder="Complemento"
            />
            <Input
              class="col-start-1 col-end-4"
              v-model="address.neighborhood"
              placeholder="Bairro"
              required
            />
            <Input
              class="col-start-4 col-end-9"
              v-model="address.city"
              placeholder="Cidade"
              required
            />
            <Input
              class="col-start-9"
              v-model="address.state"
              placeholder="UF"
              required
            />
          </fieldset>
        </Paper>
        <Paper large :rounded="false" class="flex flex-col gap-y-6">
          <p class="grid grid-cols-[1fr_26fr] grid-rows-2">
            <PhCurrencyDollar
              :size="18"
              weight="regular"
              class="fill-purple-dark row-span-2"
            />
            <span class="flex gap-x-1 text-base-subtitle text-m">
              Pagamento
            </span>
            <span class="text-s text-base-text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </p>
          <div
            class="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 justify-between"
          >
            <RadioButton
              id="credit-card"
              name="paymentForm"
              v-model="selected"
              value="creditCard"
              required
            >
              <template #icon>
                <PhCreditCard :size="24" weight="regular" class="fill-purple" />
              </template>
              Cartão de crédito
            </RadioButton>
            <RadioButton
              id="debit-card"
              name="paymentForm"
              v-model="selected"
              value="debitCard"
              required
            >
              <template #icon>
                <PhBank :size="24" weight="regular" class="fill-purple" />
              </template>
              Cartão de débito
            </RadioButton>
            <RadioButton
              id="money"
              name="paymentForm"
              v-model="selected"
              value="cash"
              required
            >
              <template #icon>
                <PhMoney :size="24" weight="regular" class="fill-purple" />
              </template>
              Dinheiro
            </RadioButton>
          </div>
        </Paper>
      </section>
      <section class="flex flex-col w-full max-w-xl lg:w-fit gap-y-4">
        <p class="title-xs">Cafés selecionados</p>
        <Paper
          class="lg:w-[450px] lg:p-12 min-w-[20rem] lg:h-full max-h-[530px] flex flex-col gap-y-6 justify-between"
        >
          <ul class="overflow-y-scroll pr-5">
            <transition-group
              enter-active-class="transition ease-out duration-300"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-300"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <CartCoffeeCard
                v-for="coffee in cartItems"
                :key="coffee.id"
                :coffee="coffee"
                @remove-from-cart="remove"
              />
            </transition-group>
          </ul>
          <div class="flex flex-col gap-y-6">
            <ul class="flex flex-col gap-y-2">
              <li class="inline-flex justify-between w-full">
                <span class="text-s text-base-text">Total de itens</span>
                <span class="text-m text-base-text"
                  >R$ {{ cartTotalFormated }}</span
                >
              </li>
              <li class="inline-flex justify-between w-full">
                <span class="text-s text-base-text">Entrega</span>
                <span class="text-m text-base-text">R$ 3,50</span>
              </li>
              <li class="inline-flex justify-between w-full">
                <span class="title-xs text-base-subtitle">Total</span>
                <span class="title-xs text-base-subtitle">{{
                  totalWithDelivery
                }}</span>
              </li>
            </ul>
            <Button @click="createOrder" class="bg-yellow text-white" large
              >CONFIRMAR PEDIDO</Button
            >
          </div>
        </Paper>
      </section>
    </div>
  </form>
</template>
<script lang="ts" setup>
import Paper from "@/components/Paper/Paper.vue";
import Input from "@/components/Input/Input.vue";
import RadioButton from "@/components/RadioButton/RadioButton.vue";
import Button from "@/components/Button/Button.vue";
import {
  PhMapPinLine,
  PhCurrencyDollar,
  PhMoney,
  PhCreditCard,
  PhBank,
} from "@phosphor-icons/vue";
import { computed, ref } from "vue";
import CartCoffeeCard from "@/components/CartCoffeeCard/CartCoffeeCard.vue";
import { useCartStore } from "@/store/cartStore";
import { useOrderStore } from "@/store/orderStore";
import { IAddress, IOrder, PaymentMethod } from "@/models/order";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const orderStore = useOrderStore();

const router = useRouter();

const cartItems = computed(() => cartStore.cartItems);

const cartTotalFormated = computed(() =>
  cartStore.cartTotalPrice.toFixed(2).replace(".", ",")
);

const totalWithDelivery = computed(() =>
  (cartStore.cartTotalPrice + 3.5).toFixed(2).replace(".", ",")
);

const remove = (id: number) => {
  cartStore.removeFromCart(id);
};

const address = ref<IAddress>({
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  cep: "",
});

const selected = ref<PaymentMethod>("");

function validate() {
  return (
    !selected.value ||
    !address.value.street ||
    !address.value.number ||
    !address.value.neighborhood ||
    !address.value.city ||
    !address.value.state ||
    !address.value.cep
  );
}

const createOrder = () => {
  if (validate()) {
    alert("Preencha todos os campos");
    return;
  }
  const order: IOrder = {
    id: Math.floor(Math.random() * 1000),
    address: address.value,
    paymentMethod: selected.value,
    order: cartItems.value,
    total: cartTotalFormated.value,
    deliveryValue: 3.5,
  };
  orderStore.registerOrder(order);
  cartStore.clearCart();
  router.push("/order-finish");
};
</script>
