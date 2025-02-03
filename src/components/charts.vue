<script setup>

import { IconChartPie } from '@tabler/icons-vue'

import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'

defineProps(['title'])

</script>

<template>
  <div class="flex flex-col">
    <ContainerCard>
      <div class="w-full flex flex-col gap-8">
        <div class="flex flex-row">
          <LeadBlock :title="title">
            <IconChartPie
              :width="24"
              :height="24"
              :stroke="1.5"
            />
          </LeadBlock>

          <div class="flex flex-row justify-center flex-wrap gap-2">
            <!-- // -->
          </div>
        </div>
        <div class="flex flex-col lg:flex-row w-full gap-8 justify-center items-center content-center">
          <apexchart
            type="line"
            :options="{
              chart: {
                id: 'basic-line'
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
              }
            }"
            :series="[
              {
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
              }
            ]"
            width="100%"
          />

          <apexchart
            type="bar"
            :options="{
              chart: {
                id: 'basic-bar'
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
              }
            }"
            :series="[
              {
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
              }
            ]"
            width="100%"
          />

          <apexchart
            type="pie"
            :options="{
              chart: {
                id: 'basic-pie'
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom'
                    }
                  }
                }
              ]
            }"
            :series="[44, 55, 13, 43, 22]"
            width="100%"
          />

          <apexchart
            type="donut"
            :options="{
              chart: {
                id: 'basic-donut'
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom'
                    }
                  }
                }
              ]
            }"
            :series="[44, 55, 13, 43, 22]"
            width="100%"
          />
        </div>
      </div>
    </ContainerCard>
  </div>
</template>
