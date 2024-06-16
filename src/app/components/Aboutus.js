import { Button } from "@/components/ui/button";
import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div className="aboutdiv">
      <div className=" p-4 sm:flex sm:justify-center sm:items-start sm:space-x-8">
      <div className="sm:w-1/3 intdiv">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">ABOUT US</h2>
          <p className="text-sm mb-4">
            National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry
            of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28.
            01. 2004.
            <a href="#" className="text-blue-600 hover:underline">
              Read More...
            </a>
          </p>
          <h3 className="text-lg font-semibold mb-2">Vision</h3>
          <p className="text-sm mb-4">
            To contribute to India and the World through excellence in scientific and technical education and research;
            to serve as a valuable resource for industry and society; and to remain a source of pride for all Indians.
          </p>
          <h3 className="text-lg font-semibold mb-2">Mission</h3>
          <p className="text-sm">
          To generate new knowledge by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes

To identify, based on an informed perception of Indian, regional and global needs, areas of specialization upon which the Institute can concentrate

To undertake collaborative projects which offer opportunities for long term interaction with academia and industry

To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of profession
          </p>
        </div>
      </div>
      <div className="sm:w-1/4 mt-4 sm:mt-0 intdiv"> {/* Reduced the width */}
        <div className="p-4 bg-white shadow rounded-lg text-center">
          <img src="/placeholder.svg" alt="P.K Jain" className="mx-auto mb-2 w-70% h-70% mainimg" /> {/* Reduced the size */}
          <h3 className="text-2xl font-bold mb-2">P.K Jain</h3>
          <p className="text-sm mb-2">Director, NIT PATNA</p>
          <p className="text-sm mb-4">pkjain@nitp.ac.in</p>
          <Button className="mr-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-green-500 py-2 px-4 border border-green-500 hover:border-transparent rounded">
            Email
          </Button>
          <Button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded">Visit Profile</Button>
        </div>
      </div>
      
      <div className="sm:w-1/3 mt-4 sm:mt-0 intdiv">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Know US</h2>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-sm mb-4">
            Prof. Pradip K. Jain joined as a Lecturer of Electronics Engineering at Institute of Technology, Banaras
            Hindu University in 1981, and became Professor in the Year 2001. He has made significant contribution in the
            areas of analysis, modeling and development of high power microwave tubes and gyrotron devices. Currently,
            he is Director of National Institute of Technology, Patna. He also served as Dean, Research and Development
            of Indian Institute of Technology (BHU), Varanasi, Coordinator of the Centre of Research in Microwave Tubes,
            Coordinator, Center of Advanced Study, and Head of Department of Electronics Engineering, IIT (BHU) besides
            acting as Chairman of the various Institute level committees over the years.
          </p>
          <h3 className="text-lg font-semibold mb-2">Director's Message</h3>
          <p className="text-sm">
            It is my pleasure to introduce one of the oldest Technological Institutes of North India, National Institute
            of Technology Patna, whose history goes back to 1876 when four survey schools were established in Dacca,
            Hoogly, Cuttack and Patna. The schools at Hoogly and Cuttack failed but those at Dacca and Patna continued
            to prosper. In 1882, a separate altogether, named as Bihar Industrial School, was opened in the premises of
            the survey school in Patna college campus.
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
}
