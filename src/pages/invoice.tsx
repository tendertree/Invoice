import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface CustomWindow extends Window {
	grist: any;
}
interface gristProps {
	title: number;
	name: string;
	size: string;
	paper: string;
	coting: string[];
	data: Date;
	to: string;
	count: number;
	detail: string;


}

async function initializeGrist(): Promise<gristProps> {
	return new Promise(async (resolve) => {
		const grist = (window as unknown as CustomWindow).grist;
		await grist.ready();
		const gristData = await new Promise<any>((innerResolve) => {
			grist.onRecord(function(record: any) {
				innerResolve(record);
			});
		});

		const gristObjects: gristProps = {
			title: gristData.A,
			name: gristData.B,
			size: gristData.C,
			paper: gristData.D,
			coting: gristData.E,
			data: gristData.F,
			to: gristData.I,
			count: gristData.G,
			detail: gristData.J,
		};
		resolve(gristObjects);

	})

}
export default function Invoice() {
	useEffect(() => { }, []);

	const { isLoading, error, data, isFetching } = useQuery<gristProps, Error>(
		["getGrist"],
		initializeGrist, {
		onSuccess: (data) => {
			console.log(data);
		}
	});
	return (
		<>
			<div className="max-w-5xl mx-auto py-16 bg-white">
				<div className="flex justify-end px-3"><p>snow white</p></div>
				<article className="overflow-hidden">
					<div className="bg-[white] rounded-b-md">
						<div className="p-9">
							<div className="space-y-6 text-slate-700">
								<img className="object-cover h-12" src="https://pbs.twimg.com/profile_images/1513243060834123776/dL8-d7zI_400x400.png" />
								<div className="flex flex-col justify-start">
									<p className="text-xl font-extrabold tracking-tight uppercase font-body flex  justify-start">
										제작의뢰서
									</p>
									<p className="flex justify-start">Unwrapped</p>
								</div>
							</div>
						</div>
						<div className="p-9">
							<div className="flex w-full">
								<div className="grid grid-cols-4 gap-12">
									<div className="text-sm font-light text-slate-500">
										<p className="text-sm  font-bold text-slate-700">
											판형:
										</p>
										<p>종이 표시 </p>
									</div>
									<div className="text-sm font-light text-slate-500">
										<p className="text-sm  font-bold text-slate-700">용지</p>
										<p>The Boring Company</p>
										<p>Tesla Street 007</p>
										<p>Frisco</p>
										<p>CA 0000</p>
									</div>
									<div className="text-sm font-light text-slate-500">
										<p className="text-sm font-bold text-slate-700">표지</p>
										<p>4도/도</p>

										<p className="text-sm font-bold text-slate-700">
											내지
										</p>
										<p>00.00.00</p>
									</div>
									<div className="text-sm font-light text-slate-500">
										<p className="text-sm font-bold text-slate-700">Terms</p>
										<p>0 Days</p>


									</div>
								</div>
							</div>
						</div>

						<div className="p-9">
							<div className="flex flex-col mx-0 mt-8">
								<table className="min-w-full divide-y divide-slate-500">
									<thead>
										<tr>
											<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
												배송처
											</th>
											<th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
												부수
											</th>

										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-slate-200">
											<td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
												<div className="font-medium text-slate-700">Tesla Truck</div>
												<div className="mt-0.5 text-slate-500 sm:hidden">
													1 unit at $0.00
												</div>
											</td>
											<td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
												48
											</td>

										</tr>
										<tr className="border-b border-slate-200">
											<td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
												<div className="font-medium text-slate-700">
													Tesla Charging Station
												</div>
												<div className="mt-0.5 text-slate-500 sm:hidden">
													1 unit at $75.00
												</div>
											</td>
											<td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
												4
											</td>

										</tr>

									</tbody>
									<tfoot>
										<tr>
											<th scope="row" colspan="3" className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
												Subtotal
											</th>
											<th scope="row" className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
												Subtotal
											</th>
											<td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
												$0.00
											</td>
										</tr>
										<tr>
											<th scope="row" colspan="3" className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
												Discount
											</th>
											<th scope="row" className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
												Discount
											</th>
											<td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
												$0.00
											</td>
										</tr>
										<tr>
											<th scope="row" colspan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
												Tax
											</th>
											<th scope="row" className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
												Tax
											</th>
											<td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
												$0.00
											</td>
										</tr>
										<tr>
											<th scope="row" colspan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
												Total
											</th>
											<th scope="row" className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden">
												Total
											</th>
											<td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
												$0.00
											</td>
										</tr>
									</tfoot>
								</table>
								<div className="text-sm  font-bold text-slate-700 flex justify-start"><p>arst</p> </div>
							</div>
						</div>

						<div className="mt-48 p-9">
							<div className="border-t pt-9 border-slate-200">
								<div className="text-sm font-light text-slate-700">
									<p className="mb-5">SnowWhite</p>
									<p>
										(10431) 경기도 고양시 일산동구 장대길 42-17, 가동 (장항동) 									</p>
								</div>
							</div>
						</div>
					</div>
				</article >
			</div >


		</>
	);
}
