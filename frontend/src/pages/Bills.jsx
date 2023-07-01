import React from 'react'
import QrNavbar from '../components/QrNavbar'

const Bills = () => {
    return (
        <div>
            <QrNavbar />
            <div className="bills">
                <div class="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
                    <h1 class="font-bold text-2xl my-4  text-blue-600">RMS Restaurant</h1>
                    <hr class="mb-2"/>
                        <div class="flex justify-between mb-6">
                            <h1 class="text-lg font-bold">Invoice</h1>
                            <div class="text-gray-700">
                                <div>Date: 01/05/2023</div>
                                <div>Invoice #: INV12345</div>
                            </div>
                        </div>

                        <div class="mb-8 pb-5">
                            <h2 class="text-lg font-bold ">Bill To:</h2>
                            <div class="text-gray-700 mb-2">Bisheshwor Khadka</div>
                            <div class="text-gray-700 mb-2">Bagmati Province,</div>
                            <div class="text-gray-700 mb-2">Banepa, Nepal </div>
                            <div class="text-gray-700">bkrazz2058@gmail.com</div>
                        </div>
                        <table class="w-full mb-8">
                            <thead>
                                <tr>
                                    <th class="text-left font-bold text-gray-700">Description</th>
                                    <th class="text-right font-bold text-gray-700">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-left text-gray-700">Momo</td>
                                    <td class="text-right text-gray-700">RS. 220.00</td>
                                </tr>
                                <tr>
                                    <td class="text-left text-gray-700">Khaja Set</td>
                                    <td class="text-right text-gray-700">RS. 350.00</td>
                                </tr>
                                <tr>
                                    <td class="text-left text-gray-700">Pizza </td>
                                    <td class="text-right text-gray-700">750.00</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td class="text-left font-bold text-gray-700">Total</td>
                                    <td class="text-right font-bold text-gray-700">RS. 2250.00</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div class="text-gray-700 mb-2">Thank you for  Visit!</div>
                        <div class="text-gray-700 text-sm">Please visit again!</div>
                </div>
            </div>
        </div>
    )
}

export default Bills
