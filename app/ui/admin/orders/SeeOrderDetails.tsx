import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import OrderDetails from './OrderDetails';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";

export function SeeOrderDetails({ id }: { id: string }) {
  return (
    <Dialog>
      <DialogTrigger className='rounded-md border p-2 hover:bg-gray-100 flex items-center w-full'>
        <DocumentTextIcon className="w-5 mr-2" />
        <span className="ml-1 text-sm">Ver</span>
      </DialogTrigger>

      <DialogContent className="w-11/12 rounded-lg sm:max-w-[600px] h-screen max-h-svh pr-0">
        <ScrollArea className="h-full pr-6">
          <OrderDetails id={id} />
          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button type="button" className="md:min-w-[100px]">
                Cerrar
              </Button>
            </DialogClose>
          </DialogFooter>
        </ScrollArea>

      </DialogContent>
    </Dialog>
  )
}