<script setup lang="ts">
  import { ref } from 'vue'
  import BodyComponent from '../components/PrimeiroComponente/BodyComponent.vue'

  const items = ref([
    { label: 'Bolsistas', class: 'classItemCor1' },
    { label: 'Listas de bolsitas', class: 'classItemCor2' },
    { label: 'Dados dos bolsitas', class: 'classItemCor3' },
  ])

  const home = ref({
    icon: 'pi pi-home',
  })
</script>

<template>
  <div class="main">
    <div class="Sidebar">
      <section class="ContainerHeader">
        <section class="ContainerICons"></section>
      </section>
      <div class="MenuContainerMain">
        <div class="ContainerImage">
          <img class="image" src="../assets/ipdec.png" />
        </div>
        <section class="MenuContainer">
          <button class="pi pi-home IconsMenu"></button>
          <p class="SpanMenu">INÍCIO</p>
        </section>
        <section class="MenuContainer">
          <button class="pi pi-user IconsMenu"></button>
          <Panel class="divPanel" header="BOLSISTAS" toggleable>
            <span class="spanListToogle">Lista de Bolsistas</span>
          </Panel>
        </section>
        <section class="MenuContainer">
          <button class="pi pi-lock IconsMenu"></button>
          <Panel class="divPanel" header="CONTROLE DE ACESSOS" toggleable>
            <span class="spanListToogle">Usuários e Permissões</span>
          </Panel>
        </section>
      </div>
    </div>
    <div class="HeaderMain">
      <div class="ContainerHeaderBreadcrumb">
        <div class="Cotainer1">
          <p class="TitleHeaderBreadcrumb">Dados do bolsista</p>
          <div class="ContainerclassBreadcrumb">
            <Breadcrumb class="classBreadcrumb" :home="home" :model="items">
              <template #item="item">
                <a :class="item.label">
                  <span
                    class="classItemCorHome"
                    v-if="!item.label"
                    :class="home.icon"
                  ></span>
                  <span :class="item.label">{{ item.label }}</span>
                </a>
              </template>
            </Breadcrumb>
          </div>
        </div>
        <div class="Cotainer2">
          <div class="CotainerDatamain">
            <div class="CotainerData">
              <div>
                <span class="TitleLogin">Fulano</span>
              </div>
              <span>fulano@gmail.com</span>
            </div>
            <img src="../assets/vue.svg" class="imageData" />
          </div>
        </div>
      </div>
      <div class="Header">
        <div class="CotainerDataHeader">
          <div class="CotainerMainPerfil">
            <img class="imagePerfil" src="../assets/image 5.png" />
            <span class="spanPerfil">Fulana Beltrana Cicrana de Tal</span>
          </div>
          <div class="classData">
            <span class="spanPerfilData">Última atualização: 14/12/2019</span>
          </div>
        </div>
      </div>
      <BodyComponent />
    </div>
  </div>
</template>

<style>
  .ClassSidebar {
    background-color: white;
  }

  .TitleLogin {
    justify-content: flex-end;
    align-items: flex-end;
    float: right;
  }

  .classData {
    /* border: solid 1px blue; */
    align-items: flex-start;
    margin-top: 75px;
    margin-right: 40px;
  }

  .classItemCorHome {
    color: var(--Azul-ao, #00cd2f);
  }

  .classItemCor1 {
    color: var(--Azul-ao, #00cd2f);
    /* Link */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
  }

  .classItemCor2 {
    color: var(--Azul-ao, #59b0fc);
    /* Link */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
  }
  .classItemCor3 {
    color: var(--Cinza-escuro, #3a3a3a);
    /* Texto corrido */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .classBreadcrumb {
    color: black;
  }

  .imagePerfil {
    border: 0px solid #000;
    /* margin-top: 16px; */
    border-radius: 50%;
  }

  .spanPerfil {
    color: var(--Branco-puro, #fff);
    /* Título */
    font-family: Montserrat;
    font-size: 16px;
    margin-left: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .spanPerfilData {
    color: white;
    margin-left: 16px;
    color: var(--Branco-puro, #fff);
    /* Texto corrido */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .Cotainer1 {
    /* border: solid 1px blue; */
    width: 87%;
    flex-direction: column;
  }

  .CotainerMainPerfil {
    /* border: solid 1px blue; */
    margin-left: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Cotainer2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CotainerDatamain {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CotainerData {
    width: 100%;
    margin-right: 12px;
    display: flex;
    flex-direction: column;
  }

  .CotainerDataHeader {
    width: 100%;
    justify-content: space-between;
    display: flex;
    height: 100%;
  }

  .imageData {
    width: 48px;
    border: none;
    border-radius: 50%;
    background-color: black;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 48px;
    flex-shrink: 0;
    fill: var(--Cinza-principal, #1b1f2e);
  }

  .ContainerclassBreadcrumb {
    display: flex;
    margin-left: 24px;
    margin-top: 12px;
  }

  .Sidebar {
    /* border: red solid 1px; */
    display: flex;
    width: 350px;
    border-right: 2px solid black;
    height: 100%;
  }

  .ContainerHeaderBreadcrumb {
    /* border: red solid 1px; */
    display: flex;
    width: 100%;
    align-items: center;
    height: 80px;
    background-color: #f1f5f9;
  }

  .TitleHeaderBreadcrumb {
    color: #3a3a3a;
    font-family: Verdana;
    font-size: 20px;
    margin-left: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .ContainerImage {
    /* border: red solid 1px; */
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    min-height: 120px;
  }

  .image {
    width: 200px;
    margin-right: 10px;
    height: 70px;
  }

  .main {
    display: flex;
    width: 100%;
    height: 100%;
    /* border: solid 1px blue; */
  }

  .Button {
    display: flex;
    color: white;
  }

  .Header {
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 104px;
    background: var(--Cinza-principal, #1b1f2e);
  }

  .HeaderMain {
    width: 100%;
  }

  .ContainerHeader {
    width: 48px;
    background-color: black;
  }

  .Icons {
    color: white;
    font-size: 20px;
    margin-top: 10px;
    margin-right: 100px !important;
  }

  .IconsMenu {
    color: white;
    /* border: 1px solid green; */
    font-size: 20px;
    position: absolute;
    margin-left: -30px;
    height: 48px;
  }

  .ContainerICons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
  }

  .MenuContainer {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    /* border: 1px solid blue; */
  }

  .MenuContainerMain {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .SpanMenu {
    margin-left: 20px;
    font-family: Verdana;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
  }

  .divPanel {
    display: flex;
    width: 100%;
    margin-left: 20px;
    font-family: Verdana;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    margin-right: 10px !important;
    letter-spacing: 0em;
    text-align: left;
    flex-direction: column;
    /* border: 1px solid blue; */
    justify-content: space-between !important;
  }

  .spanListToogle {
    font-family: Verdana;
    font-size: 15px;
    font-weight: 400;
    margin-top: 30px;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
</style>
