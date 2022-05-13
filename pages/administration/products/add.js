import React, {useRef, useState} from 'react'
import Header from '../../../components/Header'
import { db, storage } from "../../../firebase"
import { addDoc, serverTimestamp, collection, doc, updateDoc } from '@firebase/firestore'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'
import { CameraIcon, CloudUploadIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'

const Add = () => {

  const [category, setCategory] = useState('')
  const filePickerRef = useRef();
  const filePickerRef1 = useRef(null);
  const filePickerRef2 = useRef(null);
  const filePickerRef3 = useRef(null);
  const filePickerRef4 = useRef(null);
  const filePickerRef5 = useRef(null);
  const filePickerRef6 = useRef(null);
  const filePickerRef7 = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  const [selectedFile4, setSelectedFile4] = useState(null);
  const [selectedFile5, setSelectedFile5] = useState(null);
  const [selectedFile6, setSelectedFile6] = useState(null);
  const [selectedFile7, setSelectedFile7] = useState(null);
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef()
  const detailsRef = useRef();
  const categoryRef = useRef();
  const [loading, setLoading] = useState(false);

  const uploadPost = async () => {
    if(loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, `products`), {
        // username: session.user.username,
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value,
        details: detailsRef.current.value,
        category: categoryRef.current.value,
        image1: filePickerRef1.current.value,
        image2: filePickerRef2.current.value,
        image3: filePickerRef3.current.value,
        image4: filePickerRef4.current.value,
        image5: filePickerRef5.current.value,
        image6: filePickerRef6.current.value,
        image7: filePickerRef7.current.value,
        // price: price.Ref.current.value,
        // profileImg: session.user.image,
        timestamp: serverTimestamp()
    })

    const imageRef = ref(storage, `${category}/${docRef.id}/image`)
    const imageRef1 = ref(storage, `${category}/${docRef.id}/image1`)
    const imageRef2 = ref(storage, `${category}/${docRef.id}/image2`)
    const imageRef3 = ref(storage, `${category}/${docRef.id}/image3`)
    const imageRef4 = ref(storage, `${category}/${docRef.id}/image4`)
    const imageRef5 = ref(storage, `${category}/${docRef.id}/image5`)
    const imageRef6 = ref(storage, `${category}/${docRef.id}/image6`)
    const imageRef7 = ref(storage, `${category}/${docRef.id}/image7`)

    await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, `products`, docRef.id), {
            image: downloadURL
        })
    });

    await uploadString(imageRef1, selectedFile1, "data_url").then(async snapshot => {
      const downloadURL = await getDownloadURL(imageRef1);
      await updateDoc(doc(db, `products`, docRef.id), {
          image1: downloadURL
      })
  });

  await uploadString(imageRef2, selectedFile2, "data_url").then(async snapshot => {
    const downloadURL = await getDownloadURL(imageRef2);
    await updateDoc(doc(db, `products`, docRef.id), {
        image2: downloadURL
    })
});
await uploadString(imageRef3, selectedFile3, "data_url").then(async snapshot => {
  const downloadURL = await getDownloadURL(imageRef3);
  await updateDoc(doc(db, `products`, docRef.id), {
      image3: downloadURL
  })
});
await uploadString(imageRef4, selectedFile4, "data_url").then(async snapshot => {
  const downloadURL = await getDownloadURL(imageRef4);
  await updateDoc(doc(db, `products`, docRef.id), {
      image4: downloadURL
  })
});
await uploadString(imageRef5, selectedFile5, "data_url").then(async snapshot => {
  const downloadURL = await getDownloadURL(imageRef5);
  await updateDoc(doc(db, `products`, docRef.id), {
      image5: downloadURL
  })
});
await uploadString(imageRef6, selectedFile6, "data_url").then(async snapshot => {
  const downloadURL = await getDownloadURL(imageRef6);
  await updateDoc(doc(db, `products`, docRef.id), {
      image6: downloadURL
  })
});
await uploadString(imageRef7, selectedFile7, "data_url").then(async snapshot => {
  const downloadURL = await getDownloadURL(imageRef7);
  await updateDoc(doc(db, `products`, docRef.id), {
      image7: downloadURL
  })
});
    setLoading(false);
    setSelectedFile(null);
    setSelectedFile1(null);
    setSelectedFile2(null);
    setSelectedFile3(null);
    setSelectedFile4(null);
    setSelectedFile5(null);
    setSelectedFile6(null);
    setSelectedFile7(null);
};


const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) 
    { reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
        setSelectedFile(readerEvent.target.result);
    }
}

const addImageToPost1 = (e) => {
  const reader = new FileReader();
  if (e.target.files[0]) 
  { reader.readAsDataURL(e.target.files[0]);
  }

  reader.onload = (readerEvent) => {
      setSelectedFile1(readerEvent.target.result);
  }
}

const addImageToPost2 = (e) => {
  const reader = new FileReader();
  if (e.target.files[0]) 
  { reader.readAsDataURL(e.target.files[0]);
  }

  reader.onload = (readerEvent) => {
      setSelectedFile2(readerEvent.target.result);
  }
}

const addImageToPost3 = (e) => {
  const reader = new FileReader();
  if (e.target.files[0]) 
  { reader.readAsDataURL(e.target.files[0]);
  }

  reader.onload = (readerEvent) => {
      setSelectedFile3(readerEvent.target.result);
  }
}

const addImageToPost4 = (e) => {
  const reader = new FileReader();
  if (e.target.files[0]) 
  { reader.readAsDataURL(e.target.files[0]);
  }

  reader.onload = (readerEvent) => {
      setSelectedFile4(readerEvent.target.result);
  }
}

const addImageToPost5 = (e) => {
  const reader = new FileReader();
  if (e.target.files[0]) 
  { reader.readAsDataURL(e.target.files[0]);
  }

  reader.onload = (readerEvent) => {
      setSelectedFile5(readerEvent.target.result);
  }
}

const addImageToPost6 = (e) => {
  const reader = new FileReader();
  if (e.target.files[0]) 
  { reader.readAsDataURL(e.target.files[0]);
  }

  reader.onload = (readerEvent) => {
      setSelectedFile6(readerEvent.target.result);
  }
}

const addImageToPost7 = (e) => {
  const reader = new FileReader();
  if (e.target.files[0]) 
  { reader.readAsDataURL(e.target.files[0]);
  }

  reader.onload = (readerEvent) => {
      setSelectedFile7(readerEvent.target.result);
  }
}



  return (
    <div>
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 my-5 p-6 bg-white border-2 border-black container mx-auto">
            <div className=" border-2 border-black items-center">
              <div className="w-24 h-24 flex flex-col">
            {selectedFile ? (
                    <img className="" onClick={() => setSelectedFile(null)} src={selectedFile} />
                ):(
<div onClick={() => filePickerRef.current.click()} className="mx-auto flex items-center justify-center cursor-pointer h-64 w-64 rounded-full bg-gray-100 border flex-col">
    <CloudUploadIcon className="h-6 w-6 " aria-hidden="true"/>
</div>
                )}
                    <div as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center flex flex-col">
                        Upload a photo
                    </div>
            </div>
            <div className="w-24 h-24 flex flex-col">
            {selectedFile1 ? (
                    <img className="" onClick={() => setSelectedFile1(null)} src={selectedFile1} />
                ):(
<div onClick={() => filePickerRef1.current.click()} className="mx-auto flex items-center justify-center cursor-pointer h-64 w-64 rounded-full bg-gray-100 border flex-col">
    <CloudUploadIcon className="h-6 w-6 " aria-hidden="true"/>
</div>
                )}
                    <div as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center flex flex-col">
                        Upload a photo
                    </div>
            </div>

                        <div className="w-24 h-24 flex flex-col">
            {selectedFile2 ? (
                    <img className="" onClick={() => setSelectedFile2(null)} src={selectedFile2} />
                ):(
<div onClick={() => filePickerRef2.current.click()} className="mx-auto flex items-center justify-center cursor-pointer h-64 w-64 rounded-full bg-gray-100 border flex-col">
    <CloudUploadIcon className="h-6 w-6 " aria-hidden="true"/>
</div>
                )}
                    <div as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center flex flex-col">
                        Upload a photo
                    </div>
            </div>
            <div className="w-24 h-24 flex flex-col">
            {selectedFile3 ? (
                    <img className="" onClick={() => setSelectedFile3(null)} src={selectedFile3} />
                ):(
<div onClick={() => filePickerRef3.current.click()} className="mx-auto flex items-center justify-center cursor-pointer h-64 w-64 rounded-full bg-gray-100 border flex-col">
    <CloudUploadIcon className="h-6 w-6 " aria-hidden="true"/>
</div>
                )}
                    <div as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center flex flex-col">
                        Upload a photo
                    </div>
            </div>
            <div className="w-24 h-24 flex flex-col">
            {selectedFile4 ? (
                    <img className="" onClick={() => setSelectedFile4(null)} src={selectedFile4} />
                ):(
<div onClick={() => filePickerRef4.current.click()} className="mx-auto flex items-center justify-center cursor-pointer h-64 w-64 rounded-full bg-gray-100 border flex-col">
    <CloudUploadIcon className="h-6 w-6 " aria-hidden="true"/>
</div>
                )}
                    <div as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center flex flex-col">
                        Upload a photo
                    </div>
            </div>

            <div className="w-24 h-24 flex flex-col">
            {selectedFile5 ? (
                    <img className="" onClick={() => setSelectedFile5(null)} src={selectedFile5} />
                ):(
<div onClick={() => filePickerRef5.current.click()} className="mx-auto flex items-center justify-center cursor-pointer h-64 w-64 rounded-full bg-gray-100 border flex-col">
    <CloudUploadIcon className="h-6 w-6 " aria-hidden="true"/>
</div>
                )}
                    <div as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center flex flex-col">
                        Upload a photo
                    </div>
            </div>
            <div className="w-24 h-24 flex flex-col">
            {selectedFile6 ? (
                    <img className="" onClick={() => setSelectedFile6(null)} src={selectedFile6} />
                ):(
<div onClick={() => filePickerRef6.current.click()} className="mx-auto flex items-center justify-center cursor-pointer h-64 w-64 rounded-full bg-gray-100 border flex-col">
    <CloudUploadIcon className="h-6 w-6 " aria-hidden="true"/>
</div>
                )}
                    <div as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center flex flex-col">
                        Upload a photo
                    </div>
            </div>
            <div className="w-24 h-24 flex flex-col">
            {selectedFile7 ? (
                    <img className="" onClick={() => setSelectedFile7(null)} src={selectedFile7} />
                ):(
<div onClick={() => filePickerRef7.current.click()} className="mx-auto flex items-center justify-center cursor-pointer h-64 w-64 rounded-full bg-gray-100 border flex-col">
    <CloudUploadIcon className="h-6 w-6 " aria-hidden="true"/>
</div>
                )}
                    <div as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center flex flex-col">
                        Upload a photo
                    </div>
            </div>
            </div>


            <div className="flex flex-col mx-4">
                <div >
                <h1 className="flex justify-start py-2 mt-5 md:mt-1">Select Category</h1>
                <RadioGroup value={category} onChange={setCategory} className="flex flex-cols-1 md:flex-rows-5">
      <RadioGroup.Option value="indoor" className="flex">
        {({ checked }) => (
          <span className={checked ? 'border-black border-2 px-4 py-2 mx-1 flex bg-blue-200' : 'border-black border-2 px-4 py-2 mx-1 bg-white flex hover:bg-blue-200 cursor-pointer'}>Indoor</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="outdoor" className="flex">
        {({ checked }) => (
          <span className={checked ? 'border-black border-2 px-4 py-2 mx-1 flex bg-blue-200' : 'border-black border-2 px-4 py-2 mx-1 bg-white flex hover:bg-blue-200 cursor-pointer'}>Outdoor</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="pots" className="flex">
        {({ checked }) => (
          <span className={checked ? 'border-black border-2 px-4 py-2 mx-1 flex bg-blue-200' : 'border-black border-2 px-4 py-2 mx-1 bg-white flex hover:bg-blue-200 cursor-pointer'}>Pots</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="seeds" className="flex">
        {({ checked }) => (
          <span className={checked ? 'border-black border-2 px-4 py-2 mx-1 flex bg-blue-200' : 'border-black border-2 px-4 py-2 mx-1 bg-white flex hover:bg-blue-200 cursor-pointer'}>Seeds</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="accessories" className="flex">
        {({ checked }) => (
          <span className={checked ? 'border-black border-2 px-4 py-2 mx-1 flex bg-blue-200' : 'border-black border-2 px-4 py-2 mx-1 bg-white flex hover:bg-blue-200 cursor-pointer'}>Accessories</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="sale" className="flex">
        {({ checked }) => (
          <span className={checked ? 'border-black border-2 px-4 py-2 mx-1 flex bg-blue-200' : 'border-black border-2 px-4 py-2 mx-1 bg-white flex hover:bg-blue-200 cursor-pointer'}>Sales</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
    </div>
    <input 
                        ref={categoryRef}
                        type="text"
                        hidden
                        value={category}
                        />
                        <input className="border-none focus:ring-0 w-full my-3 py-4" type="text" placeholder="Product Name" ref={nameRef}/>
                        <input className="border-none focus:ring-0 w-full my-3 py-4" type="text" placeholder="Product Description" ref={descriptionRef}/>
                        <input className="border-none focus:ring-0 w-full my-3 py-4" type="text" placeholder="Price" ref={priceRef}/>
                        <input className="border-none focus:ring-0 w-full my-3 py-4" type="text" placeholder="Product Details" ref={detailsRef}/>
                        <div>
                        <input 
                        ref={filePickerRef}
                        type="file"
                        hidden
                        onChange={addImageToPost} 
                        />
                        <input 
                        ref={filePickerRef1}
                        type="file"
                        hidden
                        onChange={addImageToPost1} 
                        />
                                            <input 
                        ref={filePickerRef2}
                        type="file"
                        hidden
                        onChange={addImageToPost2} 
                        />
                                            <input 
                        ref={filePickerRef3}
                        type="file"
                        hidden
                        onChange={addImageToPost3} 
                        />
                                            <input 
                        ref={filePickerRef4}
                        type="file"
                        hidden
                        onChange={addImageToPost4} 
                        />
                                            <input 
                        ref={filePickerRef5}
                        type="file"
                        hidden
                        onChange={addImageToPost5} 
                        />
                                            <input 
                        ref={filePickerRef6}
                        type="file"
                        hidden
                        onChange={addImageToPost6} 
                        />
                                            <input 
                        ref={filePickerRef7}
                        type="file"
                        hidden
                        onChange={addImageToPost7} 
                        />
                    </div>
                        <div>
                            <button onClick={uploadPost}  className="h-10 w-full px-6 font-semibold rounded-md bg-black text-white flex items-center justify-center cursor-pointer" type="button">{loading ? "Uploading" : "Upload Post"}</button>
                        </div>
                    </div>


        </div>

{/*disabled={!selectedFile} */}


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

export default Add