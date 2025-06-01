'use client';

export default function Error() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full text-center">
      <h3 className="font-medium text-md tracking-widest text-neutral-300 w-2/3 uppercase">
        Component not yet configured for this library.
        <br />
        please check back later!
      </h3>
    </div>
  );
}
