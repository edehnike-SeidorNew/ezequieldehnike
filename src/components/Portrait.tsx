import Image from "next/image";

type PortraitProps = {
  name: string;
  size?: number;
};

/** Cut-out portrait over a dark panel with a soft glow behind the head. */
export const Portrait = ({ name, size = 280 }: PortraitProps) => (
  <div className="portrait" style={{ width: size, maxWidth: "100%" }}>
    <div className="portrait-glow" aria-hidden="true" />
    <Image
      src="/images/avatar-3d.webp"
      alt={name}
      width={402}
      height={698}
      sizes={`${size}px`}
      priority
    />
  </div>
);
