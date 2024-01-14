'use client'
import Image from 'next/image';
import addUser from '../assets/addUser.svg';
import leaveRoom from '../assets/leaveRoom.svg';

const LobbyPage = () => {
    return (
        <>
        <div className='bg-[#F1F1F4]'>
            <div className='flex flex-row md:flex-row justify-between items-center pt-[20px] pr-[4%] pl-[4%]'>
                <div className="flex flex-col mb-4 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-semibold">Lobby</h1>
                    <p className="pl-[7px] font-medium">Lobby code: 342789</p>
                </div>
                <div className="flex flex-row items-center md:flex-col gap-4 font-semibold w-max md:w-[120px] text-lg md:text-xl">
                    <button className="bg-[#BADEFF] w-[50px] rounded-full md:rounded-lg h-12 md:h-[40px] md:w-[120px]">                
                        <Image
                        src={addUser}
                        width={35}  
                        alt="add user"
                        className='md:hidden m-auto'
                        />
                        <div className='hidden md:block'>Invite</div>
                    </button>
                    <button className="bg-[#FF8484] w-[50px] rounded-full md:rounded-lg h-12 md:h-[40px] md:w-[120px]">
                        <Image
                            src={leaveRoom}
                            width={45}  
                            alt="leave room"
                            className='md:hidden m-auto'
                        />
                        <div className='hidden md:block'>Leave</div>
                    </button>
                </div>
            </div>
            <div className="md:flex flex-col m-auto mt-[20px] w-[90%] md:w-[1210px] h-[470px] rounded-[25px] bg-white">
                <div className="font-semibold text-[23px] md:text-[30px] pt-[15px] pl-[4%] md:pl-[30px]">Select the category</div>
                <div>
                <div className="flex m-auto justify-around items-center bg-[#EFEFEF] w-5/6 md:w-[300px] h-[70px] mt-[10px] md:ml-[20px] rounded-[15px]">
                    <div className="flex flex-row p-2 items-center cursor-pointer hover:bg-[#BADEFF] rounded-lg duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="27" viewBox="0 0 36 27" fill="none">
                            <path d="M4.25152 0.369019L7.75744 6.88952H13.0163L9.51039 0.369019H13.0163L16.5222 6.88952H21.7811L18.2752 0.369019H21.7811L25.287 6.88952H30.5459L27.04 0.369019H32.2988C33.263 0.369019 34.0886 0.688523 34.7758 1.32753C35.4629 1.96654 35.8059 2.73379 35.8048 3.62927V23.1908C35.8048 24.0874 35.4618 24.8551 34.7758 25.4942C34.0898 26.1332 33.2641 26.4521 32.2988 26.451H4.25152C3.28739 26.451 2.46234 26.1321 1.77634 25.4942C1.09035 24.8562 0.746774 24.0884 0.745605 23.1908V3.62927C0.745605 2.7327 1.08919 1.96546 1.77634 1.32753C2.4635 0.68961 3.28856 0.370105 4.25152 0.369019ZM4.25152 10.1498V23.1908H32.2988V10.1498H4.25152Z" fill="#616161"/>
                        </svg>
                        <p className="text-[#616161] text-[18px] font-semibold pl-[18px]">Movie</p>
                    </div>

                    <div className="flex flex-row p-2 items-center cursor-pointer hover:bg-[#BADEFF] rounded-lg duration-150 mt-2 md:mt-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                            <path d="M31.9774 0.369019V19.8748C31.9774 21.3233 31.3589 22.7125 30.2578 23.7368C29.1568 24.761 27.6634 25.3364 26.1063 25.3364C24.5492 25.3364 23.0558 24.761 21.9547 23.7368C20.8537 22.7125 20.2351 21.3233 20.2351 19.8748C20.2351 18.4263 20.8537 17.0371 21.9547 16.0129C23.0558 14.9886 24.5492 14.4132 26.1063 14.4132C27.0121 14.4132 27.8676 14.6004 28.6225 14.9437V5.78382L11.8478 9.10761V22.9957C11.8478 24.4442 11.2292 25.8334 10.1281 26.8577C9.0271 27.8819 7.53375 28.4573 5.97662 28.4573C4.41949 28.4573 2.92614 27.8819 1.82509 26.8577C0.724035 25.8334 0.105469 24.4442 0.105469 22.9957C0.105469 21.5472 0.724035 20.158 1.82509 19.1338C2.92614 18.1095 4.41949 17.5341 5.97662 17.5341C6.88245 17.5341 7.73796 17.7214 8.49283 18.0647V5.05041L31.9774 0.369019Z" fill="#616161"/>
                        </svg>
                        <p className="text-[#616161] text-[18px] font-semibold pl-[18px]">Music</p>
                    </div>
                </div>
                <div className="pl-[2%] pt-1">
                    <p className="text-[#616161] font-semibold w-full md:w-[300px] hidden md:block">Please select the category that you’d love to watch or listen to</p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LobbyPage;
