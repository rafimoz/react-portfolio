import React from 'react'

const Works = () => {
  const svgBackground = `<svg width="413" height="413" viewBox="0 0 813 813" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M344.273 38.7824C370.336 -11.8051 442.664 -11.8052 468.727 38.7823L491.531 83.0458C507.192 113.443 542.522 128.077 575.09 117.657L622.514 102.483C676.714 85.1416 727.858 136.286 710.517 190.486L695.343 237.91C684.923 270.478 699.557 305.808 729.954 321.469L774.218 344.273C824.805 370.336 824.805 442.664 774.218 468.727L729.954 491.531C699.557 507.192 684.923 542.522 695.343 575.09L710.517 622.514C727.858 676.714 676.714 727.858 622.514 710.517L575.09 695.343C542.522 684.923 507.192 699.557 491.532 729.954L468.727 774.218C442.664 824.805 370.336 824.805 344.273 774.218L321.469 729.954C305.808 699.557 270.478 684.923 237.91 695.343L190.486 710.517C136.286 727.858 85.1415 676.714 102.483 622.514L117.657 575.09C128.077 542.522 113.443 507.192 83.0458 491.532L38.7824 468.727C-11.8051 442.664 -11.8052 370.336 38.7824 344.273L83.0458 321.469C113.443 305.808 128.077 270.478 117.657 237.91L102.483 190.486C85.1416 136.286 136.286 85.1415 190.486 102.483L237.91 117.657C270.478 128.077 305.808 113.443 321.469 83.0458L344.273 38.7824Z" fill="#1E2518"/></svg>`;

  return (
    <section className='w-full'>
      <main
        className='sm:p-8 p-4 min-h-screen relative' // Added min-h-screen and relative for positioning
      >
        <div className='relative z-10'> {/* Added z-10 to ensure content is above the background */}
          <div className='w-full flex justify-between items-end p-2 pt-20 bg-primary rounded-xl'>
            <h1 className='sm:text-6xl text-4xl text-secondary'>Carenavi</h1>
            <button className='px-3 py-2 h-fit sm:text-lg text-sm rounded-full bg-secondary border-white'>visit website</button>
          </div>

          <div className='sm:flex grid grid-cols-2 sm:justify-between gap-4 py-4'>
           
            <div className='flex flex-col gap-2'>
              <h3 className='sm:text-lg text-sm uppercase'>Project year</h3>
              <div className='text-primary/80'>
                <p className='sm:text-lg text-sm'>2024-2025</p>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='sm:text-lg text-sm uppercase'>Collabrations</h3>
              <div className='text-primary/80'>
                <p className='sm:text-lg text-sm'>Rafi Mozumder</p>
                <p className='sm:text-lg text-sm'>Salma Jannat</p>
                <p className='sm:text-lg text-sm'>Dristy Anam</p>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='sm:text-lg text-sm uppercase'>Tech stack</h3>
              <div className='text-primary/80'>
                <p className='sm:text-lg text-sm'>ReactJS</p>
                <p className='sm:text-lg text-sm'>NodeJS</p>
                <p className='sm:text-lg text-sm'>MongoDB</p>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='sm:text-lg text-sm uppercase'>Role</h3>
              <div className='text-primary/80'>
                <p className='sm:text-lg text-sm'>Developer</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-12 py-20'
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgBackground)}")`,
              backgroundPosition: 'center', // Center the background
              backgroundRepeat: 'no-repeat', // Prevent repeating
              backgroundSize: '70% 70%',   // or 'cover' depending on your preference
            }}
          >
            <div className='sm:grid sm:grid-cols-2 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h2 className='sm:text-4xl text-3xl'>Project brief</h2>
                <div className='sm:w-[80%] w-full sm:h-[120px] h-[80px] bg-primary rounded-xl'></div>
              </div>
              <div className='sm:text-lg text-md'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste suscipit aliquam expedita laboriosam perferendis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptates corrupti pariatur recusandae ratione reprehenderit beatae soluta corporis? Iste ad blanditiis at itaque fugit adipisci obcaecati? Modi repellat vitae delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur voluptatibus eum quas veritatis labore ab incidunt rem eius voluptatum quod porro, sit tempora temporibus vero? Eos voluptas obcaecati ea. enim officia facilis consequatur fugit, atque, incidunt tempora corporis. At totam unde ipsum neque omnis?</p>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-2 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h2 className='sm:text-4xl text-3xl'>Problem faced</h2>
                <div className='sm:w-[80%] w-full sm:h-[120px] h-[80px] bg-primary rounded-xl'></div>
              </div>
              <div className='sm:text-lg text-md'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste suscipit aliquam expedita laboriosam perferendis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptates corrupti pariatur recusandae ratione reprehenderit beatae soluta corporis? Iste ad blanditiis at itaque fugit adipisci obcaecati? Modi repellat vitae delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur voluptatibus eum quas veritatis labore ab incidunt rem eius voluptatum quod porro, sit tempora temporibus vero? Eos voluptas obcaecati ea. enim officia facilis consequatur fugit, atque, incidunt tempora corporis. At totam unde ipsum neque omnis?</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </section>
  )
}

export default Works;