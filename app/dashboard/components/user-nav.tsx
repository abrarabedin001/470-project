// import { Avatar, AvatarFallback, AvatarImage } from '@/components//ui/avatar'
import { Button } from '@/components//ui/button'
import { signOutUser } from '@/Database/auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components//ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useUserStore } from '@/Store/userStore'
import Avatar from 'react-avatar'

export function UserNav() {
  const router = useRouter()
  let user = useUserStore((state) => state.user)
  let setCurrentTeam = useUserStore((state) => state.setCurrentTeam)
  let setTeamList = useUserStore((state) => state.setTeamList)
  const handleLogout = () => {
    // setCurrentViewAccount({ name: '', id: '' })
    setTeamList()
    setCurrentTeam(null)
    signOutUser(() => {
      router.push('/signin')
    })
  }
  return (
    <>
      {' '}
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar name={`${user?.email}`} size="30" round={true} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            {user && (
              <>
                {' '}
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.displayName}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground pt-2">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </>
            )}

            <DropdownMenuGroup>
              <Link href="/signin">
                <DropdownMenuItem>
                  Sign In
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href="/signup">
                <DropdownMenuItem>
                  Sign Up
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleLogout()}>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Link href="/signin">
            <Button className="flex">SignIn</Button>
          </Link>
          <Link href="/signup">
            <Button>SignUp</Button>
          </Link>
        </>
      )}
    </>
  )
}
