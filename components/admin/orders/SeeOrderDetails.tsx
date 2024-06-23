import OrderDetails from "@/components/admin/orders/OrderDetails";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export function SeeOrderDetails({ id }: { id: number }) {
  return (
    <Dialog>
      <DialogTrigger className='rounded-md border p-2 hover:bg-gray-100 flex items-center w-full'>
        <DocumentTextIcon className="w-5 mr-2"/>
        <span className="ml-1 text-sm">Ver</span>
      </DialogTrigger>
      <DialogContent className="w-11/12 rounded-lg sm:max-w-[600px] h-fit max-h-svh pr-0">
        <ScrollArea className="max-h-[95svh] pr-6 py-4">
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
  );
}