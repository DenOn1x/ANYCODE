<script setup>
import {ref} from "vue";
import Quiz from "@/components/Quiz/Quiz.vue";

import icExpertAM from "@/assets/images/svg/expert/ic_manufacturing.svg?url";
import icExpertAH from "@/assets/images/svg/expert/ic_healthcare.svg?url";
import icExpertAT from "@/assets/images/svg/expert/ic_technology.svg?url";
import icExpertAF from "@/assets/images/svg/expert/ic_finance.svg?url";
import icExpertAR from "@/assets/images/svg/expert/ic_retail.svg?url";
import icExpertAA from "@/assets/images/svg/expert/ic_agriculture.svg?url";
import icExpertAMA from "@/assets/images/svg/expert/ic_media.svg?url";
import icExpertAFS from "@/assets/images/svg/expert/ic_fitness.svg?url";
import icExpertART from "@/assets/images/svg/expert/ic_restaurant.svg?url";


const serviceInfo = ref({
  title: "UX/UI Дизайн",
  description:
      "Мы создаем удобные, современные и интуитивно понятные интерфейсы, ориентированные на пользователя и бизнес-цели.",
});

const benefits = ref([
  "Улучшение пользовательского опыта",
  "Рост конверсии и продаж",
  "Современные UI-тренды",
  "Кроссплатформенная адаптация",
  "Гибкость и масштабируемость",
]);

const steps = ref([
  {step: "Исследование", description: "Анализ целевой аудитории, конкурентов и бизнес-требований."},
  {step: "Прототипирование", description: "Создание wireframes и тестирование пользовательских сценариев."},
  {step: "UI-дизайн", description: "Разработка визуальной концепции, подбор цветовой схемы и типографики."},
  {step: "Тестирование", description: "Проверка удобства использования и внесение правок."},
  {step: "Передача в разработку", description: "Готовим макеты для верстки и программирования."},
]);

const whyUs = ref([
  {title: "Опыт", description: "Более 5 лет разрабатываем интерфейсы для IT-компаний и стартапов."},
  {
    title: "Глубокая аналитика",
    description: "Проводим исследования, чтобы создать решения, которые действительно работают.",
  },
  {title: "Индивидуальный подход", description: "Адаптируем дизайн под бизнес-задачи и целевую аудиторию."},
  {title: "Гарантия качества", description: "Тестируем каждую версию дизайна, чтобы достичь лучшего результата."},
]);

const tools = ref(["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"]);

const experts = ref([
  {img: icExpertAM, name: "Промышленность"},
  {img: icExpertAH, name: "Здравоохранение"},
  {img: icExpertAT, name: "Информационные технологии"},
  {img: icExpertAF, name: "Финансы"},
  {img: icExpertAR, name: "Торговля"},
  {img: icExpertAA, name: "Сельское хозяйство"},
  {img: icExpertAMA, name: "Медиа"},
  {img: icExpertAFS, name: "Фитнес-индустрия"},
  {img: icExpertART, name: "Ресторанный бизнес "},
]);
</script>

<template>
  <section class="service-section">
    <div class="container">

      <div class="service-section__heading">
        <h1>{{ serviceInfo.title }}</h1>
        <p>{{ serviceInfo.description }}</p>
      </div>

      <div class="content-block content-block--advantages">
        <h2>Преимущества</h2>
        <ul class="list">
          <li v-for="(benefit, index) in benefits" :key="index">
            <span class="list-number">{{ String(index + 1).padStart(2, '0') }}</span>
            {{ benefit }}
          </li>
        </ul>
      </div>

      <div class="content-block">
        <h2>Основные этапы работы</h2>
        <ul class="list">
          <li v-for="(step, index) in steps" :key="index">
            <strong>{{ step.step }}:</strong> {{ step.description }}
          </li>
        </ul>
      </div>

      <div class="content-block">
        <h2>Почему выбирают нас</h2>
        <ul class=" list--grid">
          <li v-for="(item, index) in whyUs" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </li>
        </ul>
      </div>

      <div class="content-block">
        <h2>Технологии и инструменты</h2>
        <ul class=" list--tools">
          <li v-for="(tool, index) in tools" :key="index">{{ tool }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>Отраслевая экспертиза</h2>
        <div class="expert-block">
          <div class="expert-block__item" v-for="(expert, index) in experts" :key="index">
            <picture>
              <img :src="expert.img" :alt="expert.name"/>
            </picture>
            <div class="name">{{ expert.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <Quiz/>
  </section>
</template>

<style scoped lang="scss">
.service-section {
  padding-top: 20px;
  color: #FFF;
  @media screen and (min-width: 767.98px) {
    padding-top: 80px;
  }


  &__heading {
    margin-bottom: 48px;
    @media screen and (min-width: 767.98px) {
      text-align: center;
    }

    h1 {
      font-size: 24px;
      font-weight: 700;
      line-height: 148%;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 12px;
      @media screen and (min-width: 767.98px) {
        font-size: 32px;
        line-height: 124%;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 38px;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 44px;
      }
    }

    p {
      font-size: 13px;
      font-weight: 300;
      line-height: 168%;
      color: rgba(255, 255, 255, 0.7);
      @media screen and (min-width: 991.98px) {
        font-size: 16px;
        max-width: 50%;
        margin: auto;
      }
    }
  }

  .content-block {
    margin-bottom: 48px;
    @media screen and (min-width: 767.98px) {
      margin-bottom: 80px;
    }

    h2 {
      font-size: 24px;
      font-weight: 400;
      line-height: 148%;
      color: #FFF;
      margin-bottom: 24px;
      @media screen and (min-width: 767.98px) {
        font-size: 24px;
        line-height: 124%;
      }
    }

    &.content-block--advantages {
      ul {
        @media screen and (min-width: 767.98px) {
          column-count: 2;
        }

        li {
          display: flex;
          align-items: center;
          break-inside: avoid;
          gap: 24px;
          padding: 0;
          font-size: 16px;

          &:not(:last-child) {
            margin-bottom: 24px;
          }

          @media screen and (min-width: 1199.98px) {
            max-width: 60%;
          }

          span {
            font-size: 28px;
            font-weight: 400;
            line-height: 124%;

            min-width: 64px;
            width: 64px;
            height: 64px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;
            border: 1px solid #FFF;
          }

          &:before, &:after {
            display: none;
          }
        }
      }

    }

  }

  .list {
    li {
      font-size: 14px;
      font-weight: 300;
      line-height: 148%;
      color: #FFF;

      padding-left: 24px;
      position: relative;

      &:not(:last-child) {
        margin-bottom: 12px;
      }

      &:before {
        content: '';
        width: 10px;
        height: 10px;
        background: #7470ff;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 5px;
      }

      &:after {
        content: '';
        width: 14px;
        height: 14px;
        border: 1px solid #7470ff;
        border-radius: 50%;
        position: absolute;
        left: -3px;
        top: 2px;
      }
    }
  }


  .list--grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    li {
      border-radius: 20px;
      padding: 24px;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 10px;
      margin: 0;

      &:before {
        display: none;
      }

      h3 {
        font-size: 18px;
        font-weight: 600;
        line-height: 148%;
        color: #FFF;
        margin-bottom: 12px;
      }

      p {
        font-size: 13px;
        font-weight: 300;
        line-height: 124%;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  .list--tools {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    li {
      padding: 12px 24px;
      border-radius: 8px;
      background: #7470ff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;

      font-size: 13px;
      font-weight: 600;
      line-height: 168%;
      color: #FFF;
      margin: 0;
      @media screen and (min-width: 991.98px) {
        font-size: 16px;
      }

      &:before {
        content: '';
        display: block;
        min-width: 18px;
        width: 18px;
        height: 18px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N15YFTl2Tbw6z6ThR0UCbiAO4q4o5XgQkBwq0trm1q3ihvaxdYALn3f7307XV4VxaXWpdZaLSoJYN3FDYUqal1QhIQlCYgrKotAwpaZOff3B0YDZpvJOXOfc+b6/dmSmcsEcl/znOc8R0BERPS1I48b1z8mciAcHOSo7qtAPwD9oNhRBD0U6AygAED911+yDgoXwGYIVgrwgQssd1SWpQQf5OXHlr324o2fmf0HUYvEOgAREdkoKbmyV4M4x7uujHRED1bgQAC9fHirFYC+BjhzHLiv5aPnvNmz40kf3ofSwAJARJQjSktLY5+s3m0IUnIigJMg+B6APIMo9QDmQDA9lih4bM6cG74yyJDzWACIiCKueGTZruLKeQr8HMDu1nm2kwJkFkQfdBryHnvttRvrrAPlChYAIqIIGlwaL+jx5fozAFwCYBQEjnWmNik2QvCg68ZufvOVm2qs40QdCwARUYSUlMQ7bcH6ywFcg60b+MJH4argMXH0xjdevvUt6zhRxQJARBQBg0vjBd2/XH+xCP4bwK7Webyjs8Vxfvf6yze/Yp0kalgAiIhCLe4MG77uAhX5XwB7WKfxiSpkqjjuhDdevvVT6zBRwQJARBRSw0Zetbfrpu4VYIR1lqxQbBTBTT07J65/9tm/bLGOE3YsAEREIVNSEs9rwPrxCsQBdLLOk22iqFZHx74x69Z/W2cJMxYAIqIQOWbEuENcxX0KDLHOYiylwB/79/n4T9OnT09ZhwkjFgAiopAYWjL+XIHei63H8dJW/4aj53JvQPpYAIiIAq6kJJ63Gev/JFtv7aPtCLAK4ox5fdakZ6yzhEnMOgAREbVsSMn4naCbnxCR862zBFgXQM/ebc9hmz5Z/sZr1mHCggWAiCigio8rOygG/Bsih1pnCQERYHT/PYd1/WT5GzOtw4QBLwEQEQXQsJIrDwWcFxXYyTpL2CjwUKKu/qK5c/+WsM4SZCwAREQBM6zkykMVsZmA9rbOEl4y00nEzuTDhVrGSwBERAFy1IjxQwTyEoAdrbOEmau659r1K/fuu9PAJ1euXMjbBJsR/KdDERHliGHDxx/pqM4EsIN1ljBTdbFu7aovkqnEWVskfzIQ56xrBlcAiIgC4KjjrtpXxJ0JAZf9O0DVxbr1azanksleACDAgTsVre6z+svKGdbZgoYFgIjI2FElV+/mSGo2JEpP8cu+r4c/kolE3nb/15G9iw7auObLytdNggUUCwARkaEhJeN3yoP7MoB9rLOEmauK9evWIJlsceP/qJ2KDly8+svKqmzmCjJeFyEiMjLktLFdCoAnAQyyzhJmqi7Wr291+AOAKOTv+x183n7ZyhV0LABERAYGl8YLCuq6PQposXWWMNu67P8VkomG9vzxbq7rTtlnn5ML/c4VBiwARERZF3d6fFn3IIATrZOEWZrDv/GrDncKd7jet1Ahwj0ARERZNnT44beJ4CLrHGGW2fD/mmDojn0OfG/Nysol3icLD54ESESURcNKxv1Jgf+2zhFmrirWr1+NZKJDJ/2u3CKy30cLpnzlVa6w4SUAIqIsGTai7Bcc/h3zzYa/jg1/AOhTqPp7LzKFFVcAiIiyoHhE2Tlw5UEIP3hlqkPL/s1LibpDqqumvu/VC4YJ/yISEflsaEnZKLhyP4d/5nwY/gAQU3HuQI5+GOYmQCIiHw0dMeEoAZ6FoLN1lrDyafg3GrBj0UEL1+TgAUFso0REPjl6RNlgcd0ZALpaZwkrV/Xr4319Gf4AAIHeUFJSsv3xwZHHAkBE5IMjjxvXX1WehfCxvpnycMNfG2TPT1fuXOrzmwQOCwARkceOPfaKPnmOvKhAf+ssYeXzsv93Ca5Bju0FYAEgIvLQUSdf0SMVy38WUJ45n6GsD/+tDhl40DnHZ/MNrbEAEBF5ZHBpvCC2Kf8RBYZYZwkro+H/9Xvjqqy/qSEWACIiD5SWlsZ6rFz3sAKjrbOEVTY2/LVOT9j74LMONHrzrGMBICLqOPl0Zf+/AvJj6yBhlb0Nf60T1znHNEAWsQAQEXXQ0JJx1ytwiXWOsLJc9t+eAGchRzYDsgAQEXVAcUnZrwS4xjpHWAVp+H9tr4GDzzrCOkQ2sAAQEWVoWMm486DyZ+scYRXA4Q8AcMU5yzpDNrAAEBFloLhk3KkK8Hz/DNlv+GuZAD9BDlwG4F9cIqI0HV0ybiiACgA5d3ysF4Ky4a8V/fc54OwDrEP4jQWAiCgNxceVHeQCPN8/Q0Fd9t+exHCMdQa/sQAQEbXTMaPK9oIjzwPYwTpLGIVl+AOAqBxtncFvLABERO1w7LFX9HET8iyAna2zhFGYhj8AKJQFgIgo1x118hU9krH851Uw0DpLGIVt+H9tr4GHlO5qHcJPLABERK0oLi7r7GzMfwrAYdZZwijIu/3boqn8o6wz+IkFgIioBaWlpTEU4CEIjrPOEkYh2O3fOtV9rCP4ibewEBE1Tz5Z2f8eCM60DhJGIV3235bIntYR/MQVACKiZhSXjLsRwMXWOcIoEsMfgIjuYZ3BTywARETbGVYy7hoAE6xzhFFUhj8AqIIrAEREuWLY8PHnK3C9dY4witLw/9ruQDyyczKy/2FEROkaOmLc6Sr6D+TAOfBeC/Nu/1Z02uewqt7WIfzCAkBEBGBoyYQSUUwFN0enLfS7/VuhiVgn6wx+YQEgopx31PETDha4jwGI7C97v0Rw2X8bmnIi+3eCBYCIctqwkVft7aTc5wH0ss4SNlEf/gAg+alC6wx+YQEgopx19Oird1E39SKAftZZwiYXhj8AQGMsAEREUTJk1DU93UTqGSDat3r5IWeGP4A8VyJ7CYCbXYgo5xQXl3VGMvEUgEOts4SNqxrZDX/N0Vgqsh+UWQCIKKcMGTI2H4WYDuBY6yxhs3W3/1c5M/wBQFNOnXUGv0S22RARNUPye3S/B5DvWwcJm1xa9m/KhVNvncEvXAEgopwxbPi4Sap6oXWOsMm1Zf+mYonUWusMfmEBIKKcMLRk3H8rMM46R9jk4rJ/Ew3V1eWrrUP4hZcAiCjyho0YP1aAP1nnCJtcXfZv4gsAah3CL1wBIKJIGzai7AxVvdM6R9jk8rJ/Ex9aB/ATCwARRdbRw8eNcBUV4O+6tOT4sn8TusA6gZ94CYCIIumYEeMOcQWPguf7p4XL/t9SlUrrDH5iASCiyCkuKdsnpeD5/mni8N+WOCwAREShUTyybFdAXgTQ1zpLmHD4f1cskVdlncFPLABEFBklJVf2UleeAbCHdZYwcVWxbv0aDv+mBJ8tXjw5srcAAiwARBQRQ04b22ULnKcFOMQ6S5hs3fCX87v9v0NVXrXO4DcWACIKvSFDxuYX1HV9BMDR1lnChMv+LRPR560z+I0FgIjCTgq6d78XkJOtg4QJh3+r1GlgASAiCrTiknG3AHqBdY4w4fBv04IlSyo+sw7hNxYAIgqtoSXjfgfgSuscYcLh3w6C56wjZANPxyKiUBpaUna5AHHrHGHC433bR4EZ1hmygQWAiEKneHjZDwG5wzpHmPB43/bSD2oX7B/5OwAAXgIgopAZNnLCSIiUA4hZZwkLLvu3n0DuBeKudY5sYAEgotAYNnz8keq6TwAotM4SFhz+aUlKQv9pHSJbWACIKBSOOu6qfRX6NIBu1lnCgsM/PaL6TC7s/m/EPQBEFHhHlVy9m4PkiwCKrLOEBTf8pc+F3GedIZu4AkBEgTakZPxODpIvANjdOktY8HjfDAiqaqv2e8Y6RjaxABBRYA05bWyXAtUnAAyyzhIWXPbPjKj+T65s/mvEAkBEgTS4NF5QUNftUQiGWWcJCw7/zAgwt7qy4nHrHNnGAkBEARR3enxZ9yCAE62ThAWHfweI+z8A1DpGtnETIBEFztDh62+F4CfWOcKCwz9zArxevWDqs9Y5LHAFgIgCZWjJ+D+K4NfWOcKCw79DUgL9jXUIKywARBQYw0aU/UKg/886R1hw+HeQ4OYllRXvWMewwgJARIFQPHz82erKX6xzhAWHf4fVbOqWjFuHsMQ9AERkbmhJ2ShA7wc/lLQLh3+HqTj680/emL7JOogl/mMjIlNDR0w4SiCPgef7t4urinXr13D4d4jcUz2/4iXrFNZYAIjIzNEjygaL684Az/dvF57w54nKzk5sgnWIIBDrAESUm448blz/PMEcCAZYZwkDLvt7oh5wv1dTOXWRdZAg4B4AIsq6ISXjd8qDvgBw+LcHH+zjCReQCzj8v8UCQERZdfTRV3dXJJ9TYH/rLGGwddn/Kw7/DlLBf9cumPKodY4g4R4AIsqawaXxAjcv+YgCQ6yzhAE3/HlDBffWLii/wTpH0LAAEFFWlJaWxnqsWv8QBCdYZwkDbvjziOCftQv2u9w6RhDxEgARZYN8vKr/3aIotQ4SBtzw5w0Bpu3Se8UlNSjPqcf8thcLABH5rrik7DooLrXOEQYc/h4RPLJL7xXnzp49O2kdJah4GyAR+aq4pOxXAI/4bY+tu/1Xc9m/gxQydbedPjuPw791LABE5JuhJePPFdXJEO43ags/+XtE9YFd+3x+KYd/21gAiMgXxSXjTgXwGHipsU0c/t4Q1YnVVRW/BaDWWcKABYCIPHd0ybihLjATQFfrLEHH4e8JBfTqmsqKSdZBwoQFgIg8NaxkwoEK9xUAO1hnCToOf0+kFDq2trLiH9ZBwoYFgIg8c8yosr1SSZkDYGfrLEHH4e8F2Qi4P6mprHjGOkkYxawDEFE0HHvsFX1SyHsJwB7WWYKOw98Ta0VxSk0VH+ubKRYAIuqwo06+oocm82dCcJB1lqDj8O84AT4XdUdVV1W8bZ0lzFgAiKhDiovLOosbmwHBUOssQcfh7wX9wNW8kbVV5XyqXwfx3lwiylhpaWlMC+VBCI6zzhJ0HP6eqHQSOGZp1UO11kGigAWAiDIln6zsf48AP7IOEnQc/p74d6owecySJRWfWQeJChYAIspI8YjxEwFcbJ0j6Dj8PfHUpu7Jk5fNnb7OOkiUsAAQUdqGjhh/NVSvss4RdBz+HafA5F13WnHmJ29M32SdJWp4DgARpWXY8PHnq+g/wd8freLw94LcXlM55UrwaF9f8B8wEbXb0OFlp4nIo+D5/q3i8O8wheLamqryG62DRBkLABG1S/GIsuFQeQ5AJ+ssQcbh32EpUVxeXVX+d+sgUccCQERtKj6u7CA48m/wfP9Wcfh32BYozq2pKv+XdZBcwAJARK0aNvKqvdVNzQHQzzpLkHH4d9hacfT06vkVr1oHyRUsAETUomEnTCjShtQcQPa1zhJkHP4d9gVUTqqpmjLPOkgu4UYeImrWkFHX9NSG5PMc/q3j8O8gxfKUKycsWzSlxjpKrmEBIKLvKC4u64xk4ikAh1pnCTIO/w4SVEkseeKy96d/ah0lF/EgICLaRmlpaQyF8jCAY62zBBmHfwcJ3owl8odXc/ibYQEgoqbk41UD7gXwQ+sgQcbh31H69KZuyRGLF09ebZ0kl7EAENE3hpaMv0lUL7TOEWQc/h0jwEM9CnvwaN8A4B4AIgIADB0x/r9Edbx1jiDj8O8oub26cmAZEHetkxBvAyQiAENLyi4QyP3g74QWcfh3iArkD9WVU+LWQehb/MdOlOOGjSg7Q1UeAVcEW8Th3yEpUf15dVXFvdZBaFssAEQ57Ojh40a4ghng+f4t4vDvkC0qcn7tginTrYPQd7EAEOWoY0aMOySlmA2gl3WWoOLw75B6AGfWVJa/aB2EmscCQJSDikvK9gFkDoC+1lmCisO/Q75Uxz25dv7Ud62DUMt4GyBRjjl69NW7APIiOPxbxOGfOQU+jMXcYzn8g48FgCiHDBl1Tc9UIjkDwB7WWYKKw79DFsJxjln8/tRq6yDUNhYAohwx5LSxXQqTiacFOMQ6S1Bx+HfIW9KA4bXzH/7EOgi1T8w6ABH5b8iQsfkF6PoYIMdbZwkqDv8OmVmgyVMWL5661joItR9XAIiiTwq6d78XkJOtgwQVh38HqEzpUdj9lKqq6fXWUSg9PPiDKOKKR5TdDNULrHMEFYd/5lTkztrKgb/m0b7hxAJAFGHFI8r+Fypl1jmCisM/c6I6saay/FrrHJQ5ngNAFFFDS8ouF8jd1jmCisM/YylAf1VTWfFX6yDUMSwARBFUXDL+B4A+Am70bRaHf8YaFDi/trJ8mnUQ6jgWAKKIGTZywkh13RkACq2zBBGHf8Y2qMqPaqumPG8dhLzBAkAUIcOGjz9SRV8G0M06SxBx+GdsjQpOrV1Q/oZ1EPIOCwBRRBx13FX7OpKaA0GRdZYg4vDPkOAzV9wTl86fWmkdhbzFAkAUAcUjy3aFK68B2N06SxBx+GdskQs9cWllxcfWQch7PAiIKOS+d/wve8OVF8Hh3ywO/0zp25qfHM7hH10sAEQhNuS0sV1iycInAQyyzhJEHP6ZUcHLTqLL8bXvTV9pnYX8w1uEiEJq6/n+3R6HYIR1liDi8M/YY8n6wh8tXXr/Rusg5C+eBEgUSnGnsPv6BxU4yTpJEHH4Z0aAu6or97uCR/vmBhYAohAqLll3i0LOss4RRBz+mRHVidVVFTzaN4ewABCFTPGIcX+A4jfWOYKIwz8jqqrja6oqbrUOQtnF2wCJQmTYiLJfqMqd1jmCiMM/Iw2ickF11ZQK6yCUfSwARCFRPHz82YA+BOHdO9vj8M/IBlfx46VV5c9ZByEbLABEITC0pGyUQJ4Gz/f/Dg7/9AnwVQp66tLKitets5AdFgCigCseWfY9uPISeL7/d3D4Z2SFA5y0pLJ8vnUQssUCQBRgR48oG+y68goEO1pnCRoO/4wsVbgn1lZOXWodhOzxICCigDqq5OrdoPoyBP2sswQNh3/6BJir+ckRtfOnfWKdhYKBm4mIAmhIyfidHCRfhGCAdZag4fBPnwCz3M3OSB7tS02xABAFzNFHX929EPocgP2tswQNh3/6FHi8ob7wlNrah9dbZ6FgYQEgCpDBpfECNy/5iAJDrLMEDYd/BlQf2G2nFaXLlz+w2ToKBQ83ARIFRGlpaezjlf2nCvAj6yxBw+GfPh7tS23hUcBEwSAfr+p/N4f/d3H4p00Bvbq6qmKSdRAKNhYAogAoHjHu/6C41DpH0HD4py2p0MtqKyv+YR2Ego+XAIiMFZeM+yWAO6xzBA2Hf7pkowhKqxdMmWGdhMKBBYDI0NCS8eeK6mSe778tDv+0rRXFadVV5XOsg1B4sAAQGRk2YsL3Vd3HAORbZwkSDv/0CPA51D2pumrq+9ZZKFxYAIgMHF0ybqgLzATQ1TpLkHD4p22Zq7ETl1Y9VGsdhMKHBYAoy4aVTDhQ1f03z/ffFod/ehRYEEvoSUuWVHxmnYXCidcdibLoe8dN2FPhvsDhvy0O/7T92y1MHsvhTx3BAkCUJccee0WfmKPPAtjZOkuQcPinSfDkpu7Jk5fNnb7OOgqFGwsAURYcdfIVPZJO/nOA7medJUg4/NOjwORde6/40SdvTN9knYXCj3sAiHw2uDRe0HPl+qcVGG2dJUg4/NMlt9dUTrkSgFonoWjgCgCRj0pLS2PdV66fwuG/LQ7/tCgU19RUTvkNOPzJQzwKmMg/8snK/vfwfP9tcfinJaWQy2qrptxnHYSihwWAyCfFI8ZPhOrF1jmChMM/LVsAOae2csqj1kEomrgHgMgHQ4ePv0JEb7fOESQc/mlZK46eXj2/4lXrIBRdLABEHhtWMu48BSaD/76+weHffgJ8rion11RNmWedhaKNv6CIPDR0eNlpIvIoeHntGxz+6dAPUinnxGWLptRYJ6HoYwEg8siw4VcWK5yZEHSxzhIUHP5pEFSJkzyx+v3pn1pHodzA2wCJPFB8XNlBKs4zHP7f4vBPh/4nlsgfzuFP2RSzDkAUdsNGXrU3oLMA9LHOEhQc/unQpzd1T526bF75eusklFu4AkDUAcNOmFCEVGoGgH7WWYKCw7/9BHioR2GPM3m0L1ngRiWiDA0ZdU1PbUg8B8FA6yxBweGfDrm9unJgGRB3rZNQbmIBIMpAcXFZZyQTTwE4zDpLUHD4t5sK5A/VlVPi1kEot/ESAFGaSktLYyjAQwCOtc4SFBz+7ZYS1cs4/CkIuAJAlB755Mv+f4PgTOsgQcHh325bVPW8mqqKR6yDEAEsAERpGVoy/iZAL7LOERQc/u1WD+DM2qqKF62DEDViASBqp+Lh434L6HjrHEHB4d9uX6jjnlI7f+q71kGImuJJgETtUDxi3M+geAD8NwOAw7/dFMtjee6Ji9+fWm0dhWh7/GVG1IahI8adLop/gStmADj807BQHefE2vkPf2IdhKg5LABErRhaMqFE4D4LoJN1liDg8G+3t2LJ/FMWL5682joIUUt4FDBRC446fsLBjrrPAehmnSUIOPzbbWaBJk9ZtKh8nXUQotbwHACiZhSXlO3jpNwXAPSyzhIEHP7t9nCPwu6nVFVNr7cOQtQWXgIg2s7Ro6/exU0kXwOwh3WWIODwbx9VvaO2av/f8GhfCgtuaiJqYsioa3qmEokZwuEPgMO/vUR1Yk1VxbXWOYjSwQJA9LXi4rLOkkw8rcAh1lmCgMO/XVIQ/LK6suIe6yBE6WIBIAIwZMjYfC2QRwAcY50lCDj826VBgfNrF5RPsw5ClAkWACJACrt3+5sCp1gHCQIO/3bZoHDPrK2c+oJ1EKJMsQBQziseUXazKsZY5wgCDv92WaOO8/3a+eX/sQ5C1BG8DZByWvHwcf8DlTLrHEHA4d82BT50nNiw2vkPc/hT6PE2QMpZxSXjLgPwV+scQcDh3y6LXOiJSysrPrYOQuQFFgDKScUl438A6CPgaZgc/u2ib0uDnFJdXb7KOgmRV3gJgHLOsJETRgJaAQ5/Dv92UMHLTqLL8Rz+FDVcAaCcMmz4+CNV9CUA3a2zWOPwb5fHdPPas2trn91iHYTIa1wBoJxx1HFX7auiT4HDn8O/HQS4q6Zyvx9z+FNUcQWAckLxyLJd4cprAHa3zmKNw79tojqxmkf7UsRxBYAi7+7JzxeJOjPB4c/h3zZV1XEc/pQLcn4TFEWbqnY5Yu++zySTqYPer/owpwsvh3+bGkTl/Jqq8r9bByHKBhYAiixVzceGDY9DZMQRh+zluKqYV7ncOpYJDv82bXAVZ9ZWlT9uHYQoW1gAKJJU1cGGDQ8D+EHj/zbk4D2RiyWAw791AnzlQk9eWlUxyzoLUTbl9JIoRdiGDbcAOGv7//nSc0fiwrNLsp/HCId/m1Y44gxfWlnxunUQomzjCgBFjtbV/R4i17T0/+fKSgCHf5sWpzRZUlNZUWMdhMgCCwBFitbV/RwiN7b156JeAjj8W6fAO8hPjlo6f/oK6yxEVlgAKDK0ru6nELkP7TzfIqolgMO/dQLM0s3OKbULK76yzkJkiQWAIkHr64+HyHQA+el8XdRKAId/6xR4PFFfeOayZQ9usM5CZI0FgEJPN278HoBnAXTJ5OujUgI4/Nug+sBufT4/f968x/kNIgILAIWc1tUdAGAmgF4deZ2wlwAO/9aJ6sSaqoorli9f7lpnIQoKFgAKLd24cTcALwPY2YvXC2sJ4PBvlQpwVXVVxR+tgxAFDQsAhZKuX78TgFkA9vbydcNWAjj8W5WE4NKayvK7rIMQBRELAIWOrlzZHQUFLwI42I/XD0sJ4PBvjWwUkTNrFpRPt05CFFQsABQqqloA1ccAHOfn+wS9BHD4t0yArxx1TqmunPKydRaiIGMBoNBQ1Rg2biwHcHo23i+oJYDDv1UrRN3R1VXlb1sHIQo6FgAKBVUV1NffDeD8bL5v0EoAh3+rlinckTVVUxdZByEKAz4MiMKhvv5PEBlr8dZBeYAQh3/LBJjrOnnFtZVTl1pnIQoLrgBQ4Gld3S8hcr1lBuuVAA7/Vs3Wzc7JSxc9tMY6CFGYsABQoGl9/TkQuRftPN/fT1YlgMO/FYInN3VP/nD5/Aoe7UuUJhYACiytrx8NYBqAPOssjbJdAjj8W6bA5N12WnHu/Dkz+M0hygALAAWSbtx4FFRnAOhsnWV72SoBHP6tkdtrK8sv59G+RJljAaDA0bq6A7H1fP+e1lla4ncJ4PBvkQK4pqay/H+sgxCFHQsABYpu3NgfW8/372edpS1+lQAO/xalFDK2trL8DusgRFHAAkCBoXV1fbD1fP+9rLO0l9clgMO/RVsA+Wlt5ZQp1kGIooIFgAJBV6/ugby8mQAOss6SLq9KAId/i9aKo6fULCh/3joIUZSwAJA5VS2A6z4O4BjrLJnqaAng8G+eAJ9DZXRNZflb1lmIooYFgEw1Od//NOssHZVpCeDwb4l+4GreyNqqhxdaJyGKIhYAMvP1+f73ADjPOotX0i0BHP4tqpRY6vjaBRUfWgchiio+C4DsbNhwA0QusY7htfY+O4DDv0WvpAqTx1S/P/1T6yBEUcYVADKhdXVXQORP1jn80tZKAId/i57a1D35gw/fml5vHYQo6lgAKOu0vv48iPwNATjf308tlQAO/+YJ5MEehd3PXfLWg1ussxDlAhYAyirdsOE0AOXIkb9725cAVRcbNqxDQwNn3Lbk9prKgT9fseLmlHUSolyRE7+EKRh048ZiqD4BoJN1lmz6tgR8AMEWrK/j6nYTKpA/1FROuRaYrdZhiHIJCwBlhdbXHwTVFwH0sM5i4fCD9sS6ug149Y33raMESRKCS2sqy2+zDkKUi1gAyHe6efNecN1ZAPpYZ7GgCqytS+LAQfvAdV3Mq6y1jhQEW1T13NrKCh7tS2SEBYB8pXV1RVB9CcAe1lksNA7/RHLr6vbhh+zHEgDUi8gZNZXlT1sHIcplLADkmybn+x9oncXC9sO/UY6XgC/U1VE1VeWvWwchynUsAOQLVe0M150BYKh1FgstDf9GOVkCFMtjee7x5GVJowAAIABJREFU1ZVTq6yjEBELAPmgyfn+J1lnsdDW8G+UYyVgocackdXzyz+wDkJEW7EAkKdUVbBhw70AzrHOYqG9w79RTpQAwZuxZP7o6qqHvrCOQkTfyrMOQBGzYcONAC6yjmEh3eHf6JLztz4I8YHyZ/2IZe2ZDQX1P/lswVMbrYMQ0ba4AkCe0fr6awH8r3UOC5kO/0YRXQl4uEdh97Or55bz2EOiAGIBIE9off3PAPwFET/fvzkdHf6NIlYC/lJTud9lPNqXKLhYAKjDdMOG0wE8jBz8++TV8G8UhRIgqhNrqirG82hfomDLuV/Y5C2tqysB8DiAAuMoWef18G8U4hKQguAXNZUVE62DEFHbWAAoY1pffzBEngPQzTpLtvk1/BuFsAQ0KHBebWX5ZOsgRNQ+LACUEV27dm84ziwAO1lnyTa/h3+jEJWAeoX7g9rKiietgxBR+7EAUNp0w4Zd4DizAfS3zpJt2Rr+jUJQAtao45xUu6D839ZBiCg9ObdjmzKjpdNi6Lp8GARn4PB9D8OFo4cB6GSdK5uyPfyb+vuDTwXunAAFPow5sROXzH9oiXUWIkofCwC1SEtv6YwuOhqiZwB6Gpo+zvfQvZbi4hN2g0ihXcLssRz+jQJWAha50BOXVlZ8bB2EiDLDAkDb0HjcwUfdhkHd86HyUwA9WvzDB+6+Cpef0h1ApEtAEIZ/o2CUAH1bGuSU6uryVcZBiKgDWAAIAKAX3ng4XJwHkZ8C2LndXzh49zpcfnIhRCJ5G2CQhn8j0xKg8pKT7PTDJUv+UWcTgIi8wgKQw3RMvBO0y08g8hsAh2f8QoP6J/DzUwDHyfcunb0gDv9GJiVAUN6joPsFc+f+LZHdNyYiP7AA5CAdc+OhAC4D5FwA3T150UG7ufj5qSk4EokSEOTh3yibJUBF7qxdMPDXQNzNyhsSke9YAHKEQgUXTToeKfkNRE/15U0G9QcuPzmFWCzUt5eGYfg3ykYJENWJ1VUV1/r6JkSUdSwAEael8QJ06fJTiHM1oIN9f8NB/YHLT0kh5oSyBIRp+DfysQSoKsbVVpXf5seLE5GtUP6SprZp6S2d498b9SsUFEyHyPkAirLyxqvWAx9+6eDwvV04TqgKZhiHP+DbYUENAj2vpqriPi9flIiCgwUgYrQ0XhA/8tSLUeD+C0ApvLrGn46tJUBw2N6KWDhKQFiHfyOPS8AGV3FmbVXFE168GBEFEwtARGg8nhff/dRLUJD/CATnorX797Nh1Xrgoy8Fh++tQV8JCPvwb+RRCVijgpOXVpbP9igWEQUUC0AE6AU3H491+Y9CcAmAntZ5vtG4EhDgEhCV4d+ogyVgRUycUdULpsz1OhcRBQ8LQIjpz24eGD/shLshOhFAX+s8zfrmcsBeQMyxTrONqA3/RhmWgMUpTZbUVFbU+JWLiIKFBSCE9PybusYPO+E6ODoZwEHWedq0aj3w0UoEqQREdfg3SqcEKPAO8pOjls6fviIL0YgoIFgAQkbH3FQCB09DcBrC9PMLUAmI+vBv1J4SIMAs3eycUruw4qssRiOiAAjPAMlxes71O8SPOPHPgNwOYCfrPBkJQAnIleHfqLUSoMDjifrCM5cte3CDQTQiMsYCEAI6ZtIP4DgvAnIswn54k2EJyLXh36j5EqB311buP2bt2tt4rj9RjmIBCDAtvaVz/KhRNwO4BYKu1nk8Y1ACcnX4N2paAkR1Yk1VRRkwOze/GUQEgAUgsPSCSUNQ4L4A4PsI+6f+5mSxBOT68G90+CH7ualEasL0aX/6o3UWIrIXvcESAXrBjb+EyC0ACqyz+G5Qf2DsSUB+ni8vz+H/jaQAY4sG7HC/dRAiCgYWgADRMfFOQLc7Ab3IOktW+VQCOPy/sVFES4v67zjDOggRBQcvAQSEXnhzfyD/OQD+PKo3yHy4HMDh/42voHpK3wE7vmwdhIiChQUgAHTMjccCmAVgH+ssZjwsARz+31gBB6P7DtjxbesgRBQ8LADGdMykMwE8BuuH9wSBByWAw/8bywAZ2bf/DousgxBRMLEAGNIxk34D6H3Ihc1+7dWBEsDh/4252pA3st+ePT+xDkJEwcUCYEChEh/T9TYAcXAj5ndlUAI4/LcSYHbeFvfkon17rbHOQkTBxgKQZQoVjLn5LwCusM4SaKvWAx+vAg5tuwRw+H/jiQapP7Pfnv14tC8RtYmfPrNI43EHH3T9OwQXWmcJjTZuEeTw/8Y/i/r3ukREktZBiCgcuAKQJVo6LYaNG/8BwRjrLKHSyuUADv+tVHB73/69fi4irnUWIgqPYDycPeIUKuj64T0ALrDOEkqLPgb+9hyQ+PbDLYc/AEAhcnW//jv8RkRy+htBROnjCkAWxMd0vx7Ar61zhFqTlQB1HA5/IKUiY/v173WHdRAiCicWAJ/pmEm/APR66xyRsGo99IOV+GqXfkjm+fPsgJDYpKo/6jdgh6nWQYgovFgAfKQXTjob0L+Dmy09oUnFutc+RnLh58Cx+2XtUcIBs1ag3++7+44zrYMQUbixAPhEL7zxcCgeBw/58YQmFeuq1yNRnwRWrIUsycUSIJ+Lg9FF/Xd8yzoJEYUfC4APdMyN/aDyMgS9rbNEwTbDv1HulYAPRJyRRf17LbQOQkTRwALgsa2P9C14DoIDrLNEQbPDv1HulIBKB8mRRQN2/NA6CBFFR6R/a5rQrncBOMo6RhS0OvwbvfsBJP4o0BDZ829eyU/oMX0G9PnMOggRRQtXADykF9z0Ewj+zzpHFLRr+DeK6EqAAE81SP0P+u3Rr946CxFFDwuAR/SiW/cC3GcAFFpnCbu0hn+jqJUAwYNF/Xud07NnzwbrKEQUTSwAHtB4PA9r854CsI91lrDLaPg3ikgJUMHtfXfr9XMRSVlnIaLoCu9vySBZ3uX3UBRbxwi7Dg3/RuHeE6BQ/P7ro315rj8R+YorAB2kF918CBQPgN/LDvFk+DcK50pASkUu7zdgh1usgxBRbuDQ6gCNx/PwVf5TAHazzhJmng7/RuEqAVtE5Zy+A3o9ZB2EiHJH4H8zBtryLhMADLGOEWa+DP9G4bgcUA+VU4t27/WIdRAiyi1cAciQXnzLPlCtAJBvnSWsfB3+jYK9EvCFuBjVd48dXrcOQkS5J3C/EUMjlZoEoLN1jLDKyvBvFMyVgOUizrFFe+zwnnUQIspNXAHIgI65qQQAH/GboawO/0bBWgmoiklqZJ/+Oy63DkJEuYsFIE0ajztYWzAdwC7WWcLIZPg3aiwBx+wH5FmVAH0z4eSN7td/hy+MAhARAeAlgPR92PUCcONfRkyHf6N3P4D8/lFgS/YzqOCZVN7mkbvt1mN11t+ciGg7XAFIg5bGC5Bf8C8AvayzhE0ghn+jFWsh1VleCVA83PfLXmf32K/Hluy8IRFR67gCkI4uXS4FsLt1jLAJ1PBvlMWVAFX8pWhAr5/JEZLw/c2IiNpJrAOEhV5xeyHWb6mF8NCfdARy+Dd1+J7Q350JFOb58/qiE/v23/Faf16ciChzXAFor/otl3L4pyfwwx/wcyUgBZXLOPyJKKi4B6AdtHRaDPnrHgawo3WWsNCUYu2S9UhuCPDwb+T9noAGUTm37+69HvTixYiI/MAVgPbo9tEPAextHSMsNKlYF5bh38i7lYB6QE4r2r3XdC9iERH5hQWgXXScdYKwCMWyf0s6XgLWqOOO7jug1wtexiIi8gMvAbRBx0w6EsAfrHOEQaiW/VuS6eUAwYdOLDai7247vO9fOCIi73AFoC3qjrWOEAahXPZvSZorAQJZlCfuMX127bHE52RERJ7hCkAr9Bd3dkMyeT+AQussQRbqZf+WtHMlQIC3k3mxUX133eHzLKYjIuowrgC0ZtPGcwF0t44RZI3L/pEa/o3aWgkQvCSdk8fvskuPVdkNRkTUcSwArVEdYx0hyCK17N+SFkuATCn6otfJffr0qTPJRUTUQTwJsAV68aTdkdIPwO9RszSlWLs44sO/qW1PDLyzqH+vX4uIax2LiChTXAFoSco9Fxz+zcq54Q9sXQn4w2OQ+k1/6jtgh19x+BNR2Pl0AHoUyFnWCYKoccNfTg3/RnOXIXX6X263jkFE5AWuADRDL7p1LwAHW+cImkju9k9Toes2WGcgIvICC0BzNHWGdYSg4fDfap3beYt1BiIiL/ASQHNUT7eOECSROOHPG4k9loMrAEQUCVwB2I6OvaEnFMdY5wiKnLjVr/0+FsS5+Y+IIoEFYHuJWAmEKyMAl/2/Q/CxdQQiIq+wAGxP5XjrCEHA4f9dAnxknYGIyCv8pPsdmvMFgNf8m6euVltnICLyClcAmtCLb9kRwCDrHJZ4zb9l6uBt6wxERF5hAWgqmTwCOXz6H5f9W+ducd61zkBE5BUWgG3IkdYJrHD4t2n5zrXXr7QOQUTkFe4BaEqQkwWA1/zbppDXrTMQEXmJBWBbR1gHyLacPts/Le6z1gmIiLzESwBf0zE39gOwq3WObOKyf7u5mpd6wToEEZGXWAAaaex71hGyicO//RTyTr/5k760zkFE5CVeAmjk6MFQ6xDZwWv+6XGgM6wzEBF5jQWgkeo+1hGygdf8M5ByK6wjEBF5jZcAGin2to7gNy77Z+S1PktuXGIdgojIaywAjSTaBYDDPzMi8k/rDEREfmABAKBj410A9LPO4RcO/4xtzssvnG4dgojIDywAANDQY29E9Ajgxg1/HP4ZEEzbYV58rXUMIiI/cBMgAMCN5PI/N/x1lHOrdQIiIr9wBQAAVAdYR/Aal/077LmiquvmWYcgIvILCwAAQPtYJ/ASh3/HOYKbrDMQEfmJBQAAIL2tE3iFw98T7/euumGWdQgiIj9xDwAAOOgdhVMAecKfN1TwR0EU/kYQEbWMBQAAVHuH/SYAbvjzhgBv9qm64VHrHEREfuMlAABhvwTAZX/vqOgEfvonolzAFYCtQlsAOPw9pPpo0cKJc6xjEBFlA1cAtupmHSATHP6eSog6v7UOQUSULVwB2KrAOkC6uOHPc3f3WXx9tXUIIqJs4QrAVvnWAdKhScU6Dn/PKPCRpNz/Z52DiCibWAC2Cs1KCJf9veeIXNFnyY111jmIiLIp5wuAlk6LISTfBw5/7wnwUJ+q65+0zkFElG2hGHy+6rowFMv/HP6+WJXKS463DkFEZIEFoEufwC//85G+/hDBr/vNn/SldQ4iIguBH36+i6US1hFawxP+fCKY2qfqhnLrGEREVnJ+BUD+8ustAFzrHM3hsr9vamNbOo21DkFEZCnnC8DXtlgH2B6X/X2zUUV/3Ls2vt46CBGRJRaArTZbB2iK9/n7RkX14r5VE9+3DkJEZI0FYKvAFAAu+/tHgN/3WTSxwjoHEVEQcBMgAEA3BeFxwDze1096/04LJ/7BOgURUVBwBQAARNZZR+Cyv38EeKJPUeexfMwvEdG3WAAAwMVqy7fnhj8/yfNrGzacJbPj/OYSETXBAgAAglVWb81P/j4SPLNhY+EP9q39S+Du8iAissY9AAAAWW2xOsxr/n6SaX06rT6vqOpvgT7oiYjICgsAAIi7GprdTYA84c9Xt/dZWFgm+FsgD3giIgoCFgAAgKzM5rtpkp/8fZJU4Iq+C2/4q3UQIqKgYwEAgBQ+zdZuCH7y94lgpbo4p++iG2ZaRyEiCgMWAACI6YfZuATAT/6+eUVc56dFi65bYR2EiCgsWAAAIN/5CA3+bgLkJ39fJBS4rmjh0j8KpqeswxARhYn98XcBoWNuqgfQ1ZfX5id/7ynmw3EuKKq6bp51FCKiMOI5AI0EH/nxsvzk77mNCvy+j9PpSA5/IqLM8RJAI0UtgEGeviQ/+XtL9dEk8sbtsuj/PrSOQkQUdiwA31oM4DSvXoyf/D31H6heU7Ro4ivWQYiIooIFoJFiiVc7IvjJ3zP/EUf+r0/l9U9bByEiihoWgG/oYi/2RHL4d5xAX0ohdn2/hde9ZJ2FiCiqWAAa5eUtQqpjd5Jx2b9DNotguivOpKLK6+ZbhyEiijreBtiEjrnpQwADMvpafvLPhAJ4XQSTY5t06o7LJq6zDkRElCu4ArCt95BBAeDwT9t7InhMgfKiqhtqrcMQEeUiFoBtvQfgjHS+gMO/HQSb4OJVcfBcMoXHdl58w3LrSEREuY4FoCnRuek8E4DDv0WbAcyFYo4CMzdu7DRnz+XxzdahiIjoWywATTl5ryOVctGOExI5/L+RALAQinkCmecq3iyKFc6VqniDdTAiImoZNwFuR8fcVAXggFb/TM4Of10LkfcBzIPK+4DO6yOdqjjsiYjChysA2xOdA5UWC0AO3eq3Aoq5AKoUutAVzO23cOJC2bpzn4iIQo4FYHvqzAF0bLP/V3Q/+X8O4DURvAbBe3l5nebtMC++1joUERH5hwXgOxKvNvdtidgn/2UieA3AnKTqa/xkT0SUe7gHoBnbHwgU8k/+WwC8DcgccfBagW5+vWfVrWusQxERkS2uADTvWQCXAaH95L9MgZkCzIw1dHq+d218vXUgIiIKFhaA5qgzA+Je1jj8E/WBH/71AvxHVZ9OqTzBg3aIiKgtLADNKaybqRu7bPpq8XpNbUx2sY7TghooHtWYPllUuexNwfSOPcmIiIhyCvcAtGDVIf/1iJtwf2SdYxuCBap4VF39V7/FExdYxyEiovDiCkALtMF9DoIgFID3IDoNrvuvooU31ViHISKiaGABaEEqP/mkk8y7B+04FtgHnwF4BMADRQtveM/g/YmIKOJ4CaAVXw6+9nUoirPyZoJNoviX6+DBosqlL/GaPhER+YkrAK17AvC7AMhSiN6bTCTu26X65lX+vhcREdFWLACtcBx5wk3pDf68ujwP0dv6VBW+IIi7/rwHERFR83gJoA1fDr52MRT7efRyLhQzHMf9405VN77l0WsSUQSpqmDtnQPgyn4QZ0+42scV9Aa0h0C6A4Cu/09SEivyVNSFYh0gawFdqYovYw6qUVC4RHZ/5ivr/xYKJq4AtEGAJxW4yoOXmhETuar3wusXevBaRBQh+vEtndG509Gu6DEABglkP11z90DA6bz1DyggjZ/Yvv3cJiJJBfKgTT/LCUQAVwFsaUCqevRKhS4WkSVQWeCk3FnYf2alCJ//keu4AtCGLwb/9mhRnZP5K8hSQH9btPCG6d6lIqIwU43nYVXRIYhhlCpGATgGQKe0X6juLWjDp5lEWCnQN1VkjiMyE3u/8C4LQe5hAWiDIu6sPGDzpwD6pfmlGxW4aePGTjfsuTy+2Y9sRBQuuvKuIa6jPxOVsyHo0+EXzLwAbG8RVKY5rvOADHpuuRcvSMHHAtAOXx5w7X0ALmr3FyieTimu4Jn8RKSr7+wPkXNUcRGAgZ6+uHcFoJGrgjdEZbKTaJgig2fXe/niFCwsAO3w+QHXnOFAHm/zDwqWKPQ3fasmPp+FWEQUYLrmroNdYIIozgEQ8+VNvC8ATWgdIHc5CedGGfw8HyEeQSwA7fDxbmWdC3sUrgLQwoOBdC1EbuiDTrdKVbwhq+GIKFB09Z3DVOW3EHwffv+O9bUAfKMewD8cFxNl/xc/8/vNKHtYANrpiwOufUKA07f7n1UED7niXNW38rovTIIRUSDoyr8eoTH3RihGZO1Ns1MAGm0C5B4nv+H3sufstdl6U/KPxTn3oSRbTwVsQt9VR4/pU3XDzzj8iXKXfnVrr9TqO/+sjvufrA7/7OsM6JVuIn9pqvqEsar8ABl2LADt5OYln4YgpZA1UL2yz8Jl3+tbOfF161xEZEdX31WqbsFigfwafl3nD54dAb0nVTPq31p7woHWYShzbHBp+GLQtb8ozEN5rwU38GQtohymX929h7r4J6DHmQbJ7iWA5iQgmOSsW/M7OWJuwjIIpY8FgIgoDbryrtPVwf0AdrTOEoACAABQ4O2YK2fJ/i98YJ2F2o+XAIiI2kE1npdaddcN6uBxBGH4B4gAR7qOvpesOeHH1lmo/bgCQETUhq1L/joNwJHWWbYRkBWAJhSCW5x1a37LSwLBxxUAIqJW6Jq/HKSuvoagDf9gEijGa4/eM3Tx6d2tw1DrWACIiFqgK+8uUY29CmAX6yxhotBRKWfTS7qkZCfrLNQyFgAiomboqjvOUEefBdDTOksYCXCkK/mv6NJRA6yzUPNYAIiItqOr77xUxfkXMnlELzU1yE3JHF1ywv7WQei7WACIiJrQNXeerZC/IncO9vFbf1d0pi4cubt1ENoW7wIgypJZce301U7oWpDY0nPVaohscDe72nnDhbcJz1UPCF11x/EK5xkICq2ztEvw7gJoTY3jyDGyzwtfWgehrVgAiDwyK65563skDnWgA6HYH44MhGI/AAMA9ACQ1/hn167UFamE7Nzky+sEWKOCarioFsFiV2VJMpk3/9I/C581kQW66s4jVeRlAN2ss7RbuAoAFHgrlkgcL4Nn11tnIRYAoozF4+oc3qNhkCNytEJGQXU0gF7t+dp1q6DJhnb++xMsAzBToTNTyYKXLrlV+Gx2j+mqe/ZXSb0KIFy71kNWAABAgBmyfs0PeE6APRYAojQ9eVvDkeLiZwB+igwHxrpVQLIho7d3BZgNxeRkLP/Ri2+Uuoxehb6hn9/UVfO7vg1gkHWWtIWwAGylN8UGzrzaOkWuYwEgaocnbtO+Tip5EUTPhweDogMFoKkNAB6DKw+MuSX/pQ6/Wo5KrblrsijOt86RkdAWAKiK/jBv35lPtP1HyS8sAESteOrPmwYgFRsP4BIAXbx6XY8KwDcEeF8Ft3RZnv/wT6ZLyrtXjjZdfdclCtxrnSNj4S0AAPCVk4odLoOeW24dJFexABA1Y8aNm/dOxZz/guA8AAVev77XBaCJSqhet7x7wdR4XFxf3iEidM3dB6rqm/Cw2GVduAsAFHgzluh1nAye7s+/BmoVzwEgamLaLdr5qZu3xFN5TiUEF8GH4e+zAyEyZY/6xFv3j2/g2fUtUL29UFWnIczDPwIEOMotWPs76xy5igWA6GtP3Zw4vjMS70Hkdwj/CXBDRPCfB65quOehK7SHdZigcdfkX4swbvqLIsXVumjUQdYxchEvAVDOe+xW7ZWH5N+gWpqt9/TxEkAzdAXEGTPmpvwXsvWOQaZr79lbU6lKhL/khf4SQCOFvhrbd+ZwEah1llzCFQDKaU9PahiSh8Q72Rz+2Sc7Q/W5ByY0/PmesZpvncaaJlO3IQrDP0IEcmyqdvS51jlyDQsA5aynb20Yqw5eh2Jv6yxZIAB+XdgjMfOfZRt3tQ5jRVfdeSYEp1rnoO8SxST9oKRdB2mRN1gAKOdMi2vBU7c0PKyKexC+TX4ddZzG8t6dfHXDEdZBsk11WoGK3GKdg1rU103m/491iFzCAkA55fmbtGvnHg2PAzjHOouhItfF7PuvSpxkHSSr1qy8AACfSBdkisu19oQi6xi5gpsAs0VVRq1Y2B+aGuhAd1dBNwBdIdpjXb32rluXWg3VOjjOBqjWK/CROM6SRYcd9hFEuDHGA8/dojsmkHgKwDDrLNndBNiiBoVecOGkwgrrIH5TnRbTNasWAdjXOounIrIJcBuC62L7vvjf1jFyAQuAT05c+c7OmigY6QpGiuphAAYC6Nrcn62rd7FufYuHt20CsESAeao6K5FKvVw7dOgnPsWOrEdv0qL8WGI2AnLrV0AKAAC4AMaOmVRwn3UQP+mau89V1Yesc3guigUAWO8UFuwhuz/zlXWQqGMB8NCJn1Qe4jqp8wGcgjQGTRsFoDnVUJ0BkQcXHXHEu+nmzDVPTNTuTkFiFhRDrLM0ClABAICUqP70gpsLH7EO4gdVFV1z93wAB1pn8Vw0CwAA/G9s4It/tA4RdSwAHXTyinf7JNU5X0QuUMXBmbxGBgWgqSqoTo6lUv+sHDqUz43fzrS4FnTu3vAkRE60ztJUwAoAADQI5PsXTMqfaR3Ea7rqjjNUnMetc/giugVgtdOt0wDZ5amN1kGijJsAM3T8Fwv6jl4x74akxpYDcnOmw98DgyEyMZWX99GguXMnD547dx+jHIETj6vTuWfyoaAN/4AqUOgj941rOMQ6iNfUcS6yzkBp652q33yGdYioYwFI04kr39l51Gfz7nFS7odQuQbBOUu8AKrnu6oLB82de9/AefNy9l7vRkN6JP8r2gf8eK5nzMGTfy/THa2DeEXrbu8DxcnWOSh9joT0Ec0hwgLQTnFV54TP5o91E/mLBDIWQKF1phbkQ/WiWDJZfcDbb8cHV1Xl2n3uAIBnbkscBygfMpK+AXmx5AMKjcblwS35ZwPI+dMPw0gVJ+jCE3e2zhFlLADtcPyK9458bcX8dxR6D4Ce1nnaqYuK/M7dtOmd/d99t9g6TDbNuF37uC6mAMizzhJOetoDVyV+ZZ3CCyouP0WGV8yNubl8XofvWABaoyqjP3v/N446cwAcZh0nQweJ675ywNtvx6Ea+Z+3qkoy2TAZ0Jy/BNIRorjpH1c1HG6doyN01Z2DAMm5Ew8jhZcBfBX5gZCpUWve6Tl6xfxpAG5D+I+LzVOR3+0/d+6Lg996q591GD89fUvifIHk1gl3/ih0FPdOK9WYdZDMyQ+tE1CHHaKLT9jTOkRUsQA046RP399PNufPA/Bj6yxeEmBkynHeHvT229G7HxrAjNu1B0RvsM4RIYdv3CNxuXWITKlghHUG6rhUDCOtM0QVC8B2Rn+24IiU4BUAe1hn8YMAu0Hk1cHvvHOMdRavucnE9YBw05CXFNc9eKWG7nuqOq0AATjymTpO1GWR8wkLQBMnfLpgNODOAhD1h1H0coEX9p879zTrIF55elLDEAUus84RQT3cvMRE6xBpW7V6GIJziy51iHAFwCcsAF8bteK9EhX3SQDdrLNkSWdR/dcBb78diXuk1dE/Agjx9ergUuC8yRO2hOqykesoPzVGx85y9FZCAAARXUlEQVS65IT9rUNEEQsAgFGfzz9I1HkMQCfrLFmWryKP7P/WW6FeKn3m1oZDwY1/fhIXco11iHQIpMQ6A3nHdXgZwA85XwBGfTF/L8fVFwD0ss5ipIs4zpMHzp0biKfkZcJV+X/gcy38dvb9V20O0aN09SDrBOQhdfjz9EFOF4CSDz7oJCn3UQUifWtcO/ROqT65z3/+08M6SLqemrRlf0B5u5f/Yo46V1mHaA/9/O4iADtY5yDviOh+1hmiKKcLQH6ndXcBErmHn2Ron/y8vHutQ6QtJr9Gjv89zhYFfhaK5wQUcFhEjSr4M/VBzv7iPOHT938KlQutcwTMT/afO3esdYj2mhbXAih+Yp0jhxTm5SXOsg7RJlVuGIueXbTm5NCtUAZdThaAk1a8t4cK/m6dI4hE9c/7v/nmQOsc7dGpe8NpAHpb58gpGvyjWV3w02IECSQVoj0o4ZCTBSAF588AulrnCKhOEovdYR2iPcRxfmadIQcV33f15kAPWBFnH+sM5L2Uq6H4YBImOVcARn06/wwoTrfOEXCjD5g7N9BL64/eob2hGokzDMImphLsJ7Sp5vqm3kgS0b7WGaImpwpA8cevdxbR26xzhIGq3rLfnDndrXO0JH9LwyjwOe823ICfuaDYyToC+UB5uc9rOVUAusa6XoaInvHvg12dTp1+YR2iJeIIDwaxIhhy/5Ua3HMzhLcARpIi+HeghEzOFIAh+k6+AGXWOcJEgXFD3nknkOepq/JJb4Zi4mw5zjpEKzpbByAfiPDn6rGcKQA7rCgYA2CAdY4wEaBoE3CJdY7tPTFxwy4AuCHIkuMEuYAVWAcgP0ihdYKoyY0CoCoi7tXWMcLIBa4qmTUrzzpHU1KQN9w6AyGQKwCqcQd8KFQkCZTFzmM5UQBGfT5vOFR4a1AGBNjty27dRlvnaEoUB1hnIAyKxzVwvz9E4i4Atc5B3lMgaZ0hagL3D9gfscAfXhJkKhKs7584gb4PPUd03mvT5t2sQzRL0WAdgXyxxTpA1ES+ABR//HpnUf2RdY6Q++Gh770XnF3fyrPegyCVzAvmz0E4KKJJ+XP1WOQLQNe8LqcB6GmdI+Q6bU6lzrAOAQBfLzvzck4AOMF9QttX1gHIB+qssY4QNZEvAKISqOvXYSWqo6wzAMDQnugLIJC3JuYaFexlnaFZIqutI5APxOXP1WORLwAARloHiASR46Eq1jESqQau5gSFIphPZ1NdaR2BvKcAC4DHIl0ARn1WNQAI6KeU8Nn5wHffNX/MquZJYI8nzkGB/Fmo4gPrDOS9GJyl1hmiJtIFwJFkkA8rCZ2Uaol1BigLQHBoIFcAHMES6wzkg7wUf64ei3QBgIsDrSNEiupg6wiOm+pmnYEaBbSMsQBE0TrZ66UvrENETaQLgDoI6i7lcHLs7793RTpZZ6BvBPNsdocFIGoU/Jn6IdIFAMoC4Kkg3H+vsY3WEegb9dYBmtXzy+UANlvHIO+IsgD4IbIFYIi+kw9gT+scEbPbwe+/39U0gWid6ftTE8H8WXx9HHC1dQ7ykiyyThBFkS0Avb/I3wFAvnWOiJFEKrWTaQAWgACRwP4sVPCqdQbyjgOXP08fRLYAuCLcLOaHVMp045fjusFcds5BAgS2ADgqs6wzkGc2IrnDW9YhoiiyBSCWcIK5QznkNBYz/b5KfiGPeQ0MXWudoEV5+bMAuNYxqONE5RUZPJ0PePJBZAtAykmyAPhBbe/9PuXXshJAcAdPDnEhNdYZWiI9L1kDxfvWOajjVJSrOT6JbAGAaJ51hIiy31ehCOzgySWiEuid2Srg4IgAx8XL1hmiKrIFQDSP14r9kEqZX/dVHvQSCIlkXqB/Do66M6wzUAepfI79er1nHSOqolsAoCwAPhDHMS8AgmB/8swR6y79swT7ZLbeq2YB+Ng6BnWAo1NEpqesY0RVZAtAMuWaD6oockTWW2dQuAusMxAqrQO0RSTuqmKKdQ7KnKN40DpDlEW2ALiF+eusM0RRLC/PvAAUoOBVcIe3rZBszHLEmWydgTJWJQNfnGcdIsoiWwBmFw2uB/CldY6IqZt/8MHmz1o/adz/b+/eg6Oq7jiAf79nd5MgQSQ8Coza8ZGEShWRpGqk1ehItQKd6dQITgGBThNQQVArU5my1dHypkUB8dGqgLWgtRZKJQkY64gdRqxYAwllrIJCJEDJbohJdu/59Q+Yaa0Bk83unrv3ns8Mf+bcb5Ih+92z58FjAOwfBoO0qIwoAOxbsRvku6ZzWImQZ00n8DrPFgDAXiCRdCL1IMV0DACgiF0ZbE5rrhN823SIzqLGc6YzWF0WV5r245sU83QBUECd6Qwe45qfpyCQEe9AvYjA9rJl/Nx0jk6LNz8D4IjpGFYXkC9wSNVB0zG8ztMFQCCuecHyBLpo9X1uoAYuPorWy0SwyXSGruDA+08I+LjpHFanaQUuNB3CDzxdACiBv5nO4CVUyjXTvmPK2QLgD6Zz+FBcVOh3pkN0laL6FQC7MDgTCF5i/pZa0zH8wNMFoH3wkR2A+W1rHtEWaW3dbjrEFwjtFqE0I6Ry8iI2mM7RVcwrbxKRVaZzWF9JlFILTIfwC08XgBqWxgF5y3QOLyCw/ZOSEld97rszGrQHvaSZRubuy1ZxtQxAi+kc1ukR2MT8LXbXRpp4ugAAAChbTUfwAoH7zlUPh6lJsfu80+d4TyfrVdMhEsWB0w4TsO8u3audkAdMh/ATzxeAAORlAK7YupbRRF4xHaEjjGU9DsBVMxPeJSsyavV/R/L6zYfdHuxOwqUsqN5jOoafeL4AvDZo+EcA7McA3bNzT3GxK49+veWnbADxrOkcPnBCh7J+bTpEd5Fl7YS623QO60sOqHj7I6ZD+I3nCwAAEHaxWDe5++ennPkA2k3H8DTiiSm/pPFTIJOBfSuqAGwwncP6LxHO4NAae4FbmvmiALS3Oethp4kTFQuF3L3ta8zMHvtJe+lLCrU5jC01HSKZKJwFe46EKxD4c7Cw8o+mc/iRLwpAzQXDjxN2mjgRBNa9P2yY6+9UEOXMA3DCdA4vEpElUxf29NSpbOw37VOCPzadw8JhavzEdAi/8kUBAACNoJ0m7jrHEZlvOkRnjJnZYz+E9jPE5NsfYNajpkOkAvtOWy/gU6Zz+JjW4I/skb/m+KYAVA8euh+Aq6eyXYfcUF9cnDErpj+PBpcAsKuIk4iQGRMX07MzKyqSMwP2ZkkzhA+HCiqrTMfwM98UAADQWh4FEDOdI0M4IpJR7/zKwmxXihWw2z6TRF6btDg7Y/f9dwYvmNxKR5XBrgdIKwHeUAW9Hzadw+98VQC2nnv5XgoyfitTOgiwsq6o6B+mc3TVLfeE/griCdM5POCo1o4vPpvlgIp/nloPoE1n8Yn9gbgaT25wTAfxO18VAADIZmwegI9N53C5z3ICgZ+bDpGoQCA0C4A9TjRxQsjUKUvP8s0xy+w7bT0p9nyA1DuqIDfxki2HTAexfFgANg4uaiFxn+kcbkbyvveGDz9uOkeivjeDbRr6NgD2IqgEELLY61P/HWHenSuFyKiPvTJMi1Ica0/7cw/fFQAAqBw07CUI15vO4UYU2bj7iivWmc7RXd+fnbOPkHLTOTLQ262RrAdNhzBF9Zk2V4CnTefwoJgIf8iLK911o6jP+bIAAEAsFJgq9kzw/3dAaz0ZpCcW0Y2enf0iIQ+ZzpExiA+FoR+UP0nfLpQlKSqvXwWAl01n8RBHyMnBwsq/mA5ifZFvC0DNgKHNcnL1rz0h8KS4Fhlfd+WVR00HSabRs7PnAVhuOkcGaKSjb568iA2mg5hGljnM63ebAE+azuIBbUKOC+ZXZvysohf5tgAAwNbzLn1fwJmmc7gBgdn1xcWevDRpZyQ0C6Q9+/30opq4adLSnL2mg7gFWeYE+k4vJzHHdJYMdlyJujGYX/mS6SBWx3xdAACgevBlTwkRNp3DJALzdxcVPWY6R6qEw9S5TcGJENliOosLNQs4dsqiLLtrogPMm76Awrthtwh21SEFlLJwy5umg1in5/sCAADVg4b9AvDp+QAia3ePGPEz0zFSrTTM1txo1mgAvzWdxUWOERw1eXGoxnQQN2O/aY8TGAfA3lbXOX9XcedqFlTZExZdzhaAU64ZdNlsgGtN50gnki9/rbnZM4v+vkppmPHRs0JTKbLYdBbjBB85SpdMWhx623SUTMC+0zdQ6xEAdpnO4mqCNSo3ZyQv2WbPWskAtgCcEiZ11aBLJ4pgkeks6UDg2QGRyLia0tK46SzpRFJG35t9P4Vz4N9p3XcDTqhk6sIcuwumC9j/rr2M9LhKIHZR6ZdIVITjA4VVEzl4Y4vpNFbn0HQAN7rx4K6ZAJYhTT+faLNGUyStp2Iu2FNU5PvFTZuWxEqFeh3AQel+dtMRIG7gbkoCa1pzQxXlYdo/0t0gx1aMF+ETAM42GiS6A9L+qdEIAHYqpcbx4i37TAexusYWgNMY9emucZp4kkCvVD8rjQWgRYDpdUVFz6XjYZlg83Lp78Ta14D8bjqfa6AARCFSfseSbHsjZpJI4+pBOuAsoGCCsRBmC8AJCBereO9HOXSDvWo9A9kCcAY3fPJegVL8PYDLU/mcdBQAAnUaKMvEC35Sbf16CeQciM8hZS6AnHQ8M80F4K2Ao++YsCzHvkNLAWlcdZ0oWQHgkrQ/3FABIGQTA7iTF1XvT/vDraSxawDOYOu5l++NtZ19tQhWInOvmBUAT/cARtgX/46VldEZe2/okUBcfxOQzabzJNExCu75KDf0HfvinzrsP62GefErKDIXwAnTeVKsTkNuVAXVY+yLf+azMwCdNOrg+yMEWAVIcbLHTuEMQD1E7tpTXFydisG9auPS1jGAegzA11P1jBTPAAiBtSEJzb59CY+k7CnWl0hkdT8di99FcAaAPil/YPpmAD4QkUWBg/EXWFrjq4XDXmYLQBdcJ68HQ4fy7gQQBnBOssZNQQGICPBQT2D5zqIi357r3h2bl0u2dmKTRDAXwHnJHj9FBUBDZLNWnGcP9jFLGp/pBdU6RcA5AAam7EGpLwC7RGRpoGDkWjLs110znmULQALGNtb1+jzWNgXgA4B0ewV5EgtABMAq1d6+sLak5FgyBvS7d1ZL6FBzbDyIBwEUJGvcJBeAGIEX40o/Yrf2uYscXpELxUlCTATwraQ/IDUFoBWUVzX4m1B+VWWyB7fcwxaAbhjVsKunaCkHWAEgP9FxulsACHwoIqt1W9uq+pEjowkPZJ3W62EJRns5NynqCQKMRTcXCyalAAhqofg847F1k5adZXwvmHVm0riyUCsZT3ACgAuTMmhyC8BOAGuUo9fyG1s9dSmY1TFbAJLk5BoBmQhgPID+XfnaBAtAE8g/Qevn9xQVbfXLaX5u8MoyOSeoY7eCuB3ANQBCXR0j0QJA4GMBXtHEGjvNn5lEwgrHB3xbO7iZRCmAEQACCQ3WvQIQIfCGULYpR73KIZX/SnQgKzPZApBkt9bWZjX1ca6CyPWauJ7AlQCyzvQ1nSwAcZA7ILJNA9uc3r2378vPb0tacCshG1fLWWyJl4jWI0FeA+BadKIQNB0RibezM///GgnWiEg1gvLWHQuya7sd2nIVOba6NxznWq14PSkjIRgCoGenvja6A+h8AfiMwC4R1ihiG/J7v0NuSOsJZJa72AKQYqMadvWkyFAHHEJBIYFCAc8XyNkEcgHkRqJOPBLVWQCiOHlgSxTAfpJ7NVlPoE7l5HxQO3SovYzE5V4PS07knPaCgINCDVVASiGA80HkQtAHp37n/z4sR3WcuQQiImgWopkijULupaBeyL1gsG7yIjYY/pYsA+ToivMgLISSAn3yb8eFAPr+zz8C6I2mNw9I/MhAAC0QtoFyVICjFDRAYZ8AdQGt6hF06nlRdZPJ78lyn/8AoRko/xSxssYAAAAASUVORK5CYII=);
        transition: 0.1s ease;
        position: static;
      }
    }
  }

  .expert-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media screen and (min-width: 767.98px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 1199.98px) {
      grid-template-columns: repeat(5, 1fr);
    }

    &__item {
      border-radius: 20px;
      padding: 12px;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 10px;
      @media screen and (min-width: 767.98px) {
        padding: 24px;
      }

      picture {
        img {
          display: block;
          max-width: 100%;
        }
      }

      .name {
        font-size: 13px;
        font-weight: 300;
        line-height: 148%;
        color: #FFF;
        margin-top: 12px;
      }
    }
  }
}
</style>


