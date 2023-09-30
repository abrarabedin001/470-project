'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
// import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Solutions } from '@/lib/constants';

const components: { title: string; href: string; description: string }[] =
  Solutions;

export function SolutionsForMobile() {
  const [open, setOpen] = React.useState(true);
  return (
    <NavigationMenu>
      <NavigationMenuList className="overflow-scroll">
        <NavigationMenuItem className="flex justify-center flex-col">
          <Accordion
            type="single"
            collapsible
            className="text-center hover:border-none"
          >
            <AccordionItem value="item-1" className="text-center border-none ">
              <AccordionTrigger className="text-center p-0  flex justify-center border-none hover:border-none">
                SOLUTIONS
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] grid-cols-1 md:grid-cols-2 lg:w-[600px] overflow-scroll">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* <NavigationMenuContent> */}

          {/* </NavigationMenuContent> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      {/* <NavigationMenuLink asChild> */}
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
      {/* </NavigationMenuLink> */}
    </li>
  );
});
ListItem.displayName = 'ListItem';
