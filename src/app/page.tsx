"use client";
import AddNewVideoCard from "@/components/AddNewVideoCard";
import FloatingProfileCard from "@/components/FloatingProfileCard";
import VideoCard, { VideoProps } from "@/components/VideoCard";
import React, { useState } from "react";

const KeyValuePair = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="border-l-2 border-gray-300 pl-4 ">
      <p className="font-bold mb-2">{value}</p>
      <p className="text-gray-500 w-24 text-wrap">{title}</p>
    </div>
  );
};

const Home = () => {
  const [releases, setReleases] = useState<VideoProps[]>([
    {
      id: "1",
      title: "The Sound of Silence",
      offered: "75%",
      raised: "$9510",
      shares: "317",
      thumbnailSrc:
        "https://images.unsplash.com/photo-1517343155053-3bc076e687b9?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
  const bannerImgSrc =
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const profileImgSrc =
    "https://yt3.googleusercontent.com/iWkJUXam8nJBex6hpRRpobgvfWwBJdNntF1RxSuIxcSux36zdwUpVymuWBzSKV09QRef1Mq9=s900-c-k-c0x00ffffff-no-rj";

  return (
    <>
      <div>
        {/* Cover Image  */}
        <div className="relative">
          <img
            src={bannerImgSrc}
            className="w-full h-[520px] object-cover"
            alt="cover-pic"
          />
          {/* Floating Profile Card */}
          <FloatingProfileCard
            imageSrc={profileImgSrc}
            name="Dan Mace"
            username="/Johny_Films/"
            bio="Simply a film fan creating original content for YouTube. Let’s Collaborate."
            isCreator={true}
          />
          {/* Releases */}
        </div>

        <div className="mt-32 px-16">
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex-1 font-serif">
              <h1 className="font-bold text-2xl md:text-4xl mb-2">Releases</h1>
              <p className="text-gray-500 text-base md:text-xl">
                Videos that you upload in collaboration with aBit appear here.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <KeyValuePair title="Shared Videos" value="1" />
              <KeyValuePair title="Funds Raised" value="$9510" />
              <KeyValuePair title="Co-owner community" value="317" />
              <KeyValuePair title="Co-owner Earnings" value="$3804" />
            </div>
          </div>

          {/* Videos */}
          <div className="flex gap-8 flex-wrap my-16 ">
            {/* Add new video Card */}
            <AddNewVideoCard
              onClick={() => setReleases((state) => [...state, state[0]])}
            />
            {/* Released Videos  */}
            {releases.map((release) => {
              return <VideoCard key={release.id} {...release} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
