'use client'

import Image from 'next/image'

import { Button } from '@/components//ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components//ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components//ui/tabs'
import { CalendarDateRangePicker } from './components/date-range-picker'
import { MainNav } from './components/main-nav'
import Overview from './components/overview'
import  {CountMembers} from './components/countMembers'
import  CountTasks from './components/countTasks'

import Chat from '@/components/Chat'
import { Search } from './components/search'
import TeamSwitcher from './components/team-switcher'
import { UserNav } from './components/user-nav'
import { useUserStore } from '@/Store/userStore'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { InviteMembers } from '@/components/InviteMembers'

export default function DashboardPage() {
  const user = useUserStore((state) => state.user)
  const router = useRouter()
  // if (!user) {
  //   return 'null'
  // }
  return (
    <>
      <div className=" flex-col flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Link href="/dashboard/tasks">
                <Button>See Tasks </Button>
              </Link>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Members
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold"><CountMembers/></div>

                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Tasks
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="7" y1="9" x2="17" y2="9" />
                              <line x1="7" y1="13" x2="17" y2="13" />
                              <line x1="7" y1="17" x2="17" y2="17" />

                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold"><CountTasks/></div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Incomplete Tasks
                      
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
             <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <line x1="15" y1="9" x2="9" y2="15" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
                <Card className="col-span-3 h-[400px] max-h-[400px]">
                  <CardHeader className="grid grid-cols-2 gap-4">
                    {/* Overview title on the left */}
                    <div>
                      <CardTitle>Overview</CardTitle>
                      <CardDescription>
                        Get a sense of the tasks that are highly priorotize:
                      </CardDescription>
                    </div>
                    {/* See Tasks button on the right */}
                    <div className="flex justify-self-end">
                      <Button>
                        <Link href="/dashboard/tasks">See All Tasks</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3 h-[400px] max-h-[400px]">
                  <CardHeader className="top-0 pt-2">
                    <CardTitle>Chat Box</CardTitle>
                    <CardDescription>
                      You can chat with your team here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chat />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          <InviteMembers />
        </div>
      </div>
    </>
  )
}
