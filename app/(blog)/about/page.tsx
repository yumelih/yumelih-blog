import Image from "next/image";
import SubscribeNewslatter from "../../ui/subscribe-newslatter";

export default function Page() {
  return (
    <>
      <div className="mx-auto flex w-5/6 flex-col items-start gap-12 py-12 text-lg text-gray-700 lg:w-2/3">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus.
          </p>
        </div>
        <Image
          src="/static/images/blog-image1.jpg"
          width={1000}
          height={800}
          alt="blog image"
        />
        <div className="space-y-2">
          <h3 className="m-0 text-xl font-bold text-gray-900">
            About the blog
          </h3>
          <p>
            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
            luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
            tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
            Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
            magna. Sed consequat, leo eget bibendum sodales, augue velit cursus
            nunc, quis gravida magna mi a libero. Fusce vulputate eleifend
            sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy
            id, metus.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="m-0 text-xl font-bold text-gray-900">
            My Skills and Experience
          </h3>
          <p>
            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="m-0 text-xl font-bold text-gray-900">Side Projects</h3>
          <p>
            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi.
          </p>
        </div>
      </div>
      <div className="col-start-2">
        <SubscribeNewslatter />
      </div>
    </>
  );
}
