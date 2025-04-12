<script setup>

import { IconChartPie } from '@tabler/icons-vue'

import ContainerCard from '@/components/container-card.vue'
import LeadBlock from '@/components/lead-block.vue'

defineProps({
  title: {
    type: String,
    default: 'Gráficos'
  }
})

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
                id: 'primeiro-trimestre',
                toolbar: {
                  show: false
                }
              },
              xaxis: {
                categories: [
                  'Janeiro',
                  'Fevereiro',
                  'Março'
                ]
              },
              colors: [
                '#3498db'
              ],
              stroke: {
                curve: 'smooth'
              },
              markers: {
                size: 5,
                colors: ['#2980b9'],
                strokeColors: '#fff',
                strokeWidth: 2,
                hover: {
                  size: 7
                }
              },
              grid: {
                borderColor: '#e0e0e0'
              },
              tooltip: {
                theme: 'dark'
              }
            }"
            :series="[
              {
                name: 'Vendas',
                data: [30, 40, 35]
              }
            ]"
            width="100%"
          />

          <apexchart
            type="bar"
            :options="{
              chart: {
                id: 'primeiro-semestre'
              },
              xaxis: {
                categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
              },
              colors: [
                '#3498db'
              ],
              grid: {
                borderColor: '#e0e0e0'
              },
              tooltip: {
                theme: 'dark'
              }
            }"
            :series="[
              {
                name: 'Assinaturas',
                data: [30, 40, 35, 50, 49, 60]
              }
            ]"
            width="100%"
          />

          <apexchart
            type="pie"
            :options="{
              chart: {
                id: 'entregas'
              },
              labels: [
                'Features',
                'Bugfixes',
                'Tech Debt',
                'Refactor',
                'Improve'
              ],
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
              ],
              colors: [
                '#2ecc71',
                '#e74c3c',
                '#3498db',
                '#34495e',
                '#e67e22',
              ],
              grid: {
                borderColor: '#e0e0e0'
              },
              tooltip: {
                theme: 'dark'
              }
            }"
            :series="[44, 55, 13, 43, 22]"
            width="100%"
          />

          <apexchart
            type="donut"
            :options="{
              chart: {
                id: 'throughput'
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
              ],
              colors: [
                '#2ecc71',
                '#e74c3c',
                '#3498db',
                '#34495e',
                '#e67e22',
              ],
              grid: {
                borderColor: '#e0e0e0'
              },
              tooltip: {
                theme: 'dark'
              }
            }"
            :series="[44, 55, 13, 43, 22]"
            width="100%"
          />
        </div>
      </div>
    </ContainerCard>
  </div>
</template>
