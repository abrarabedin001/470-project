'use client'

import * as React from 'react'
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components//ui/avatar'
import { Button } from '@/components//ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components//ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components//ui/dialog'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components//ui/popover'

import { createTeam } from '@/Database/firestore/firebaseDb'
import TeamForm from '@/components/CreateTeamForm'
import { useUserStore } from '@/Store/userStore'

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function TeamSwitcher({ className }: TeamSwitcherProps) {
  const teamList = useUserStore((state) => state.teamList)
  const setTeamList = useUserStore((state) => state.setTeamList)
  const currrentTeam = useUserStore((state) => state.currrentTeam)
  const setCurrentTeam = useUserStore((state) => state.setCurrentTeam)
  const [teamListObj, setTeamListObj] = React.useState<
    { label: string; value: string }[]
  >([])

  const [open, setOpen] = React.useState(false)
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false)

  const [loading, setLoading] = React.useState(false)
  const user = useUserStore((state) => state.user)
  let populateTeamList = async () => {
    setTeamList()
    let array: { label: string; value: string }[] = []
    teamList.map((team) => {
      console.log('team', team)
      array.push({
        label: team.name,
        value: team.id,
      })
    })
    setTeamListObj(array)
  }
  const adminId = user?.uid // Replace with actual admin ID
  React.useEffect(() => {
    populateTeamList()
  }, [])

  const handleTeamSubmit = async (teamDetails: any) => {
    console.log('Team Details:', teamDetails)
    // addSampleData()
    // Here, you can call the createTeam function to save the team details to your database
    try {
      const teamId = await createTeam(
        teamDetails.name,
        teamDetails.adminId,
        user?.email!
      )
      console.log('Team Created with ID:', teamId)
      setLoading(false)
    } catch (error) {
      console.error('Error creating team:', error)
    }
  }

  return (
    <Dialog
      open={showNewTeamDialog}
      onOpenChange={() => {
        // setOpen((prev) => !prev)
        populateTeamList()
        setShowNewTeamDialog
      }}
    >
      <Popover
        open={open}
        onOpenChange={() => {
          setOpen((prev) => !prev)
          populateTeamList()
          // setShowNewTeamDialog
        }}
      >
        {/* {selectedTeam && ( */}
        <>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              aria-label="Select a team"
              className={cn('w-[200px] justify-between', className)}
            >
              {currrentTeam ? (
                <>
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage
                      src={`https://avatar.vercel.sh/${currrentTeam.value}.png`}
                      alt={currrentTeam.label}
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  {currrentTeam?.label}
                  <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </>
              ) : (
                <>
                  <Avatar className="mr-2 h-5 w-5"></Avatar>
                  None Selected
                  <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandList>
                <CommandInput placeholder="Search team..." />
                <CommandEmpty>No team found.</CommandEmpty>

                <CommandGroup key={'Teams'} heading={'Teams'}>
                  {teamListObj.map((team) => (
                    <CommandItem
                      key={team.value}
                      onSelect={() => {
                        setCurrentTeam(team)
                        setOpen(false)
                      }}
                      className="text-sm"
                    >
                      <Avatar className="mr-2 h-5 w-5">
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${team.value}.png`}
                          alt={team.label}
                          className="grayscale"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      {team.label}
                      <CheckIcon
                        className={cn(
                          'ml-auto h-4 w-4',
                          currrentTeam?.value === team.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
              <CommandSeparator />
              <CommandList>
                <CommandGroup>
                  <DialogTrigger asChild>
                    <CommandItem
                      onSelect={() => {
                        setOpen(false)
                        setShowNewTeamDialog(true)
                      }}
                    >
                      <PlusCircledIcon className="mr-2 h-5 w-5" />
                      Create Team
                    </CommandItem>
                  </DialogTrigger>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </>
        {/* )} */}
      </Popover>
      <DialogContent className="w-[200px]">
        <DialogHeader>
          <DialogTitle>Create team</DialogTitle>
          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <TeamForm
              onSubmit={handleTeamSubmit}
              loading={loading}
              setLoading={setLoading}
              adminId={adminId!}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
