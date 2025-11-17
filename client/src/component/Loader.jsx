import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Loader = () => {
    const { navigate, axios, getToken } = useAppContext()
    const { nextUrl } = useParams()
    const [paymentStatus, setPaymentStatus] = useState('processing') // 'processing', 'success', 'error'

    useEffect(() => {
        const updateBookingStatus = async () => {
            try {
                // Get the sessionId from the URL query parameter
                const urlParams = new URLSearchParams(window.location.search)
                const sessionId = urlParams.get('session_id')
                
                if (sessionId) {
                    // Verify payment with backend
                    const { data } = await axios.post(
                        '/api/bookings/verify-payment',
                        { sessionId },
                        { headers: { Authorization: `Bearer ${await getToken()}` } }
                    )
                    
                    if (data.success) {
                        setPaymentStatus('success')
                        toast.success('Payment successful!')
                        
                        // Redirect after showing success
                        setTimeout(() => {
                            navigate(`/${nextUrl}`)
                        }, 1500)
                    } else {
                        setPaymentStatus('error')
                        toast.error(data.message || 'Payment verification failed')
                        setTimeout(() => {
                            navigate(`/${nextUrl}`)
                        }, 2000)
                    }
                } else {
                    // No session ID, just redirect
                    setTimeout(() => {
                        navigate(`/${nextUrl}`)
                    }, 1000)
                }
            } catch (error) {
                console.error('Error processing payment:', error)
                setPaymentStatus('error')
                toast.error('Payment verification failed')
                // Still redirect even if verification fails
                setTimeout(() => {
                    navigate(`/${nextUrl}`)
                }, 2000)
            }
        }

        if (nextUrl) {
            updateBookingStatus()
        }
    }, [nextUrl])

    return (
        <div className='flex flex-col justify-center items-center h-screen gap-6 bg-gradient-to-br from-gray-50 to-gray-100'>
            {paymentStatus === 'processing' && (
                <>
                    <div className='animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary'></div>
                    <div className='text-center'>
                        <p className='text-gray-700 text-xl font-medium'>Processing your payment...</p>
                        <p className='text-gray-500 text-sm mt-2'>Please wait while we confirm your booking</p>
                    </div>
                </>
            )}

            {paymentStatus === 'success' && (
                <>
                    <div className='relative'>
                        <div className='w-24 h-24 bg-green-500 rounded-full flex items-center justify-center animate-bounce'>
                            <svg 
                                className='w-12 h-12 text-white' 
                                fill='none' 
                                stroke='currentColor' 
                                viewBox='0 0 24 24'
                            >
                                <path 
                                    strokeLinecap='round' 
                                    strokeLinejoin='round' 
                                    strokeWidth='3' 
                                    d='M5 13l4 4L19 7'
                                />
                            </svg>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='text-green-600 text-2xl font-semibold'>Payment Successful!</p>
                        <p className='text-gray-600 text-sm mt-2'>Your booking has been confirmed</p>
                        <p className='text-gray-400 text-xs mt-1'>Redirecting you now...</p>
                    </div>
                </>
            )}

            {paymentStatus === 'error' && (
                <>
                    <div className='relative'>
                        <div className='w-24 h-24 bg-red-500 rounded-full flex items-center justify-center'>
                            <svg 
                                className='w-12 h-12 text-white' 
                                fill='none' 
                                stroke='currentColor' 
                                viewBox='0 0 24 24'
                            >
                                <path 
                                    strokeLinecap='round' 
                                    strokeLinejoin='round' 
                                    strokeWidth='3' 
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='text-red-600 text-2xl font-semibold'>Verification Issue</p>
                        <p className='text-gray-600 text-sm mt-2'>Please check your bookings</p>
                        <p className='text-gray-400 text-xs mt-1'>Redirecting you now...</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Loader