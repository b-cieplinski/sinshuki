import React, {useRef, useState} from 'react'
import Header from '../../../components/Header'
import { db, storage } from "../../../firebase"
import { addDoc, serverTimestamp, collection, doc, updateDoc } from '@firebase/firestore'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'
import { CameraIcon } from '@heroicons/react/solid'

const BannerChange = () => {

  const titleRef = useRef();
  const descriptionRef = useRef();
  const [loading, setLoading] = useState(false);

  const uploadPost = async () => {
    if(loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, 'category-banner'), {
        // username: session.user.username,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        timestamp: serverTimestamp()
    })

    setLoading(false);
};


  return (
    <div>
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 my-5 p-6 bg-white border-2 border-black container mx-auto">
            <div className=" border-2 border-black">
    
                    <div as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center">
                        Upload a photo
                    </div>
            </div>


            <div className="flex flex-col mx-4">
                        <input className="border-none focus:ring-0 w-full my-3 py-4" type="text" placeholder="Collection Title" ref={titleRef}/>
                        <input className="border-none focus:ring-0 w-full my-3 py-4" type="text" placeholder="Collection Description" ref={descriptionRef}/>

                        <div>
                    </div>
                        <div>
                            <button onClick={uploadPost} className="h-10 w-full px-6 font-semibold rounded-md bg-black text-white flex items-center justify-center " type="button">{loading ? "Uploading" : "Upload Post"}</button>
                        </div>
                    </div>


        </div>



        {/* <div>

        <div className="flex pt-4 px-4 text-center justify-center">

            <span className="hidden " aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
                
                {selectedFile ? (
                    <img className="" onClick={() => setSelectedFile(null)} src={selectedFile} />
                ):(
<div onClick={() => filePickerRef.current.click()} className="mx-auto flex items-center justify-center h-12 w-12 rounded-full cursor-pointer">
    <CameraIcon className="h-6 w-6" aria-hidden="true"/>
</div>
                )}

                <div>
                    
                    <div as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Upload a photo
                    </div>
                    <div>
                        <input className="border-none focus:ring-0 w-full text-center" type="text" placeholder="Product Name" ref={nameRef}/>
                        <input className="border-none focus:ring-0 w-full text-center" type="text" placeholder="Product Description" ref={descriptionRef}/>
                        <input className="border-none focus:ring-0 w-full text-center" type="text" placeholder="Price" ref={priceRef}/>
                        <input className="border-none focus:ring-0 w-full text-center" type="text" placeholder="Product Details" ref={detailsRef}/>
                    </div>

                    <div>
                        <input 
                        ref={filePickerRef}
                        type="file"
                        hidden
                        onChange={addImageToPost} 
                        />
                    </div>
                </div>
                <button onClick={uploadPost} disabled={!selectedFile} className="h-10 w-full px-6 font-semibold rounded-md bg-black text-white flex items-center justify-center " type="button">{loading ? "Uploading" : "Upload Post"}</button>
                </div>
  

        </div>
        </div> */}
    </div>
  )
}

export default BannerChange