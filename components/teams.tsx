import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Ayush Mishra",
        role: "Project lead & Documentation",
        imageUrl:
          "https://res.cloudinary.com/dajq9hekb/image/upload/v1732258598/WhatsApp_Image_2024-11-22_at_12.20.43_PM_n9irxg.jpg",
        linkedinUrl: "https://linkedin.com/in/biswaranjangoswami1979",
      },
  {
    name: "Supratyush Sahoo",
    role: "Frontend & Backend",
    imageUrl:
      "https://res.cloudinary.com/dajq9hekb/image/upload/v1732258595/WhatsApp_Image_2024-11-22_at_12.15.13_PM_lmv5rt.jpg",
    linkedinUrl: "https://www.linkedin.com/in/supratyush-sahoo-4032b4240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  {
    name: "Smruti Mohanty",
    role: "Data Model",
    imageUrl:
      "https://res.cloudinary.com/dajq9hekb/image/upload/v1732258593/Smruti_Mohanty_sn7y4x.jpg",
    linkedinUrl: "https://www.linkedin.com/in/smruti-mohanty-a13856232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Ashutosh Gouda",
    role: "Data Model",
    imageUrl:
      "https://res.cloudinary.com/dajq9hekb/image/upload/v1732259972/WhatsApp_Image_2024-11-22_at_12.48.30_PM_t7uvnf.jpg",
    linkedinUrl: "https://www.linkedin.com/in/asutoshgouda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app   ",
  },
  {
    name: "Abhisekh Pradhan",
    role: "Report & documentation",
    imageUrl:
      "https://res.cloudinary.com/dajq9hekb/image/upload/v1732259983/Screenshot_2024-09-24-01-38-25-61_99c04817c0de5652397fc8b56c3b3817_jx2lea.jpg",
    linkedinUrl: "www.linkedin.com/in/abhishekpradhanjrc",
  },
  {
    name: "Deeksha J",
    role: "Presentation & Documentation",
    imageUrl:
      "https://res.cloudinary.com/dajq9hekb/image/upload/v1732329314/Snapchat-1818754274_sftwnm.jpg",
    linkedinUrl: "https://linkedin.com/in/sabyasachi1",
  },
];

const Teams = () => {
  return (
    <div className=" px-10 pb-10">
      <div className="bg-black text-white py-10 px-4 rounded-[50px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-6">
            The Team
          </h2>
          {/* <p className="text-center text-gray-400 mb-12">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p> */}

          <div className="flex flex-row flex-wrap justify-center lg:gap-16 ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-black shadow-lg transition-transform transform hover:scale-105 rounded-lg"
              >
                <div className="relative">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    height={400}
                    width={400}
                    className="w-80 h-80 object-cover p-4"
                  />
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#141446] to-[#3F4279] text-white p-2 px-4 rounded-full"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;