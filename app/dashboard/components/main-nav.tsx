import Link from 'next/link'

import { cn } from '@/lib/utils'
import { useUserStore } from '@/Store/userStore'
import { Button } from '@/components/ui/button'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  let currrentTeam = useUserStore((state) => state.currrentTeam)
  return (
    <nav
      className={cn(
        'flex w-full items-center space-x-4 lg:space-x-6',
        className
      )}
      {...props}
    >
      {currrentTeam && (
        <Link
          href="/dashboard"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          <Button>Dashboard</Button>
          {/* Dashboard */}
        </Link>
      )}
    </nav>
  )
}
