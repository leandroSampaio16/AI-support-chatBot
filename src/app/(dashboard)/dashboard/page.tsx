
import {
  getUserClients,
  getUserPlanInfo,
} from '@/actions/dashboard'
import DashboardCard from '@/components/dashboard/cards'
import { PlanUsage } from '@/components/dashboard/plan-usage'
import InfoBar from '@/components/infobar'
import PersonIcon from '@/icons/person-icon'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
  const clients = await getUserClients()
  const plan = await getUserPlanInfo()

  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-auto chat-window flex-1 h-0">


    <div className="flex gap-2 flex-wrap w-full">
      <DashboardCard
        value={clients || 0}
        title="Potential Clients"
        icon={<PersonIcon />}
      />
    </div>

    <div className="w-full py-12">
      <div>
        <h2 className="font-bold text-2xl">Plan Usage</h2>
        <p className="text-sm font-light">
          A detailed overview of your metrics, usage, customers and more
        </p>
      </div>
      <PlanUsage
        plan={plan?.plan!}
        credits={plan?.credits || 0}
        domains={plan?.domains || 0}
        clients={clients || 0}
      />
    </div>
  </div>


    </>
  )
}

export default Page
