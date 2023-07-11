import Image from "next/image";
import SectionTitle from "./SectionTitle";

const OurVision = () => {
  return (
    <section id="our-vision" className="wrapper section-padding">
      <SectionTitle title="Our Purpose of Existance" />

      <div className="flex flex-col gap-20 text-xl">
        {/* PART 1 */}
        <div className="grid lg:grid-cols-5 gap-20">
          <div className="space-y-5 lg:col-span-3">
            <p className="text-9xl font-bold opacity-10">01</p>
            <h3 className="text-5xl font-semibold uppercase">
              We Are Animal Lovers
            </h3>
            <p>
              
              We prioritize the health and well-being of over 450 animals through the combined efforts of our 80 rescue volunteers, two shelter homes capable of accommodating 600 homeless animals, and three medical service centers managed by eight dedicated veterinary doctors. 
            </p>
            <p>
            In addition to our commitment to humans, our organization is deeply devoted to animal welfare. Our vision revolves around a world where compassion knows no boundaries, extending to all species, and eradicating hunger and suffering. We actively work towards this goal by providing nutritious and animal-friendly food to needy animals, along with essential medical care and shelter. Our comprehensive approach aims to nurture empathy and foster a society that values and safeguards the well-being of every living being.
            </p>
          </div>
          <div className="lg:col-span-2 w-full h-full overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/15817660/pexels-photo-15817660/free-photo-of-people-feeding-cat-on-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="People Feeding Cat on City Street"
              width={1280}
              height={720}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* PART 2 */}
        <div className="grid lg:grid-cols-5 gap-20">
          <div className="order-2 lg:order-1 lg:col-span-2 w-full h-full overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/4483669/pexels-photo-4483669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Black elderly people sitting on chairs in yard of hospital in poor African village"
              width={1280}
              height={720}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-5 lg:col-span-3 order-1 lg:order-2">
            <p className="text-9xl font-bold opacity-10 lg:text-right">02</p>
            <h3 className="text-5xl font-semibold uppercase lg:text-right">
              We Are Your Frineds
            </h3>
            <p className="lg:text-right">
             
              We ensure that over 400 elderly individuals in 4 assisted living facilities, more than 600 children in 6 orphanages, and an average of 200 homeless people receive nutritious and balanced meals regularly. Our efforts are made possible by a network of over 200 food suppliers and supported by a dedicated team of 60 volunteers.
            </p>
            <p className="lg:text-right">
            Our organization is committed to the well-being of individuals and has a vision for a future where no one goes hungry. Through dedicated and relentless efforts, we gather excess food from restaurants and events, converting it into nourishing meals for those in need. Our aim is to address hunger by connecting the surplus food with the needs of underprivileged individuals. With compassion and unwavering determination, we envision a society where everyone has access to an abundant supply of nutritious food, thereby promoting their well-being and upholding their dignity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
