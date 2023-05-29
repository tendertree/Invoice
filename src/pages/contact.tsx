import { useState } from "react";
import { GristDocAPI } from 'grist-api';
export default function Contact() {
	const [title, setTitle] = useState('');

	const DOC_URL = "https://showwhite.getgrist.com/doc/sxth2h76uq3z";




	const clickhandler = () => {
		console.log("click");
		const api = new GristDocAPI(DOC_URL, { apiKey: '88798151f97cc5789678dfb55d4e35f4a46216d5' });
		api.addRecords('Food', [
			{ 상태: '신규', 제목: '12' },
		]);
	}
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">의뢰하기!</h1>
					<p className="py-6">원하는 상품을 쉽고 빠르게 기획하세요</p>
				</div>
				<div className="card flex-shrink-0 w-[1024 px] max-w-3xl shadow-2xl bg-base-100">
					<div className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">제목</span>
							</label>
							<input type="text" placeholder="의뢰물" className="input input-bordered" />
						</div>
						<label className="label">
							<span className="label-text">판형</span>
						</label>
						<select className="select select-bordered w-full max-w-xs">
							<option>210*298</option>
						</select>
						<label className="label">
							<span className="label-text">용지</span>
						</label>
						<select className="select select-bordered w-full max-w-xs">
							<option>스노우</option>
							<option>백모</option>
							<option>트레이싱</option>
						</select>



						<div>
							<label className="label">
								<span className="label-text">제목</span>
							</label>
							<div className="form-control">
								<label className="label cursor-pointer">
									<span className="label-text">코팅</span>
									<input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
								</label>
							</div>
							<div className="form-control">
								<label className="label cursor-pointer">
									<span className="label-text">무광</span>
									<input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
								</label>
							</div>

						</div>

						<div className="form-control mt-6">
							<button className="btn btn-primary" onClick={clickhandler}>문의하기</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
